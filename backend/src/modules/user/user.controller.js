import { prisma } from "../../config/db.js";
import catchAsync from "../../utils/catchAsync.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { getPagination, getSearch } from "../../utils/query.js";

export const getAllUsers = catchAsync(async (req, res) => {
    const { skip, take, page, limit } = getPagination(req.query);
    const where = getSearch(req.query, ["name", "email", "mobile"]);

    const [users, total] = await Promise.all([
        prisma.user.findMany({
            where: {
                ...where,
                role: {
                    not: "ADMIN"
                }
            },
            skip,
            take,
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                name: true,
                email: true,
                gender: true,
                mobile: true,
                createdAt: true,
            },
        }),
        prisma.user.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                users,
                pagination: {
                    total,
                    page,
                    limit,
                    totalPages,
                },
            },
            "Users fetched successfully"
        )
    );
});
