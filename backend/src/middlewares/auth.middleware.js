import jwt from "jsonwebtoken";
import prisma from "../config/db.js";
import ApiError from "../utils/ApiError.js";

export const protect = async (req, res, next) => {
    try {
        let token;

        // Get token from cookie
        token = req.cookies.token;

        if (!token) {
            throw new ApiError(401, "Not authorized, no token provided");
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Get user from DB
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, name: true, email: true }, // Exclude password
        });

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        req.user = user;
        next();
    } catch (error) {
        next(new ApiError(401, "Not authorized, token failed"));
    }
};
