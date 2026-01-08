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

