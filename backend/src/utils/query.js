/**
 * Reusable utility for Prisma pagination and search
 */

export const getPagination = (query) => {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const skip = (page - 1) * limit;
    const take = limit;

    return {
        skip,
        take,
        page,
        limit,
    };
};

export const getSearch = (query, fields) => {
    const search = query.search;
    if (!search || !fields || fields.length === 0) return {};

    return {
        OR: fields.map((field) => ({
            [field]: {
                contains: search,
                mode: "insensitive",
            },
        })),
    };
};
