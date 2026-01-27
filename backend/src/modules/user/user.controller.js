import { prisma } from "../../config/db.js";
import catchAsync from "../../utils/catchAsync.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { getPagination, getSearch } from "../../utils/query.js";

export const getAllUsers = catchAsync(async (req, res) => {
    const { skip, take, page, limit } = getPagination(req.query);

    const searchCondition = getSearch(req.query, [
        "name",
        "email",
        "mobile",
    ]);

    // Base condition: NON-ADMIN users only
    const where = {
        role: {
            not: "ADMIN",
        },
    };

    // Attach search only if present
    if (searchCondition) {
        where.OR = searchCondition.OR;
    }


    const [users, total] = await Promise.all([
        prisma.user.findMany({
            where,
            skip,
            take,
            orderBy: {
                created_at: "desc",
            },
            select: {
                id: true,
                name: true,
                email: true,
                gender: true,
                mobile: true,
                created_at: true,
                subscription: {
                    select: {
                        status: true,
                    },
                },
            },
        }),
        prisma.user.count({ where }),
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                users,
                pagination: {
                    total,
                    page,
                    limit,
                    totalPages: Math.ceil(total / limit),
                },
            },
            "Users fetched successfully"
        )
    );
});

export const getSubscriptionPlan = catchAsync(async (req, res) => {
    const { userId } = req.params;

    const subscription = await prisma.subscription_plan.findUnique({
        where: {
            user_id: parseInt(userId),
        },
    });

    if (!subscription) {
        return res
            .status(404)
            .json(new ApiResponse(404, null, "Subscription not found"));
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                subscription,
                "Subscription fetched successfully"
            )
        );
});

export const getMySubscription = catchAsync(async (req, res) => {
    const userId = req.user.id;

    const subscription = await prisma.subscription_plan.findUnique({
        where: {
            user_id: Number(userId),
        },
    });

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                subscription || null,
                "My subscription fetched successfully"
            )
        );
});

export const getMyWebinars = catchAsync(async (req, res) => {
    const userId = req.user.id;

    const userWebinars = await prisma.user_webinar.findMany({
        where: {
            user_id: Number(userId),
        },
        include: {
            webinar: true,
        },
        orderBy: {
            joined_at: "desc",
        },
    });

    // Convert BigInt to string for each webinar
    const serializedWebinars = userWebinars.map((uw) => ({
        ...uw,
        webinar_id: uw.webinar_id.toString(),
        webinar: {
            ...uw.webinar,
            id: uw.webinar.id.toString(),
            // Ensure other BigInts (like price if decimal?) are handled if necessary, 
            // but Decimal is usually string in JSON or number. 
            // Prisma Decimal is object, but JSON.stringify handles it usually or needs conversion.
        },
    }));

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                serializedWebinars,
                "My webinars fetched successfully"
            )
        );
});
