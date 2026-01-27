import { prisma } from "../../config/db.js";
import catchAsync from "../../utils/catchAsync.js";
import ApiResponse from "../../utils/ApiResponse.js";
import ApiError from "../../utils/ApiError.js";

export const joinWebinar = catchAsync(async (req, res) => {
    const { userId, webinarId } = req.body;

    if (!userId || !webinarId) {
        throw new ApiError(400, "User ID and Webinar ID are required");
    }

    // Convert IDs to proper types
    const uId = Number(userId);
    const wId = BigInt(webinarId);

    // Check if user exists
    const userExists = await prisma.user.findUnique({
        where: { id: uId },
    });

    if (!userExists) {
        throw new ApiError(404, "User not found");
    }

    // Check if webinar exists
    const webinarExists = await prisma.webinars.findUnique({
        where: { id: wId },
    });

    if (!webinarExists) {
        throw new ApiError(404, "Webinar not found");
    }

    // Check if already joined
    const existingRegistration = await prisma.user_webinar.findUnique({
        where: {
            user_id_webinar_id: {
                user_id: uId,
                webinar_id: wId,
            },
        },
    });

    if (existingRegistration) {
        throw new ApiError(400, "User is already registered for this webinar");
    }

    // Create registration
    const registration = await prisma.user_webinar.create({
        data: {
            user_id: uId,
            webinar_id: wId,
            status: "REGISTERED", // Default status
        },
    });

    // Convert BigInt to string for JSON serialization
    const serializedRegistration = {
        ...registration,
        webinar_id: registration.webinar_id.toString(),
    };

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                serializedRegistration,
                "User successfully joined the webinar"
            )
        );
});
export const cancelWebinar = catchAsync(async (req, res) => {
    const { userId, webinarId } = req.body;

    if (!userId || !webinarId) {
        throw new ApiError(400, "User ID and Webinar ID are required");
    }

    const uId = Number(userId);
    const wId = BigInt(webinarId);

    // Check if registration exists
    const registration = await prisma.user_webinar.findUnique({
        where: {
            user_id_webinar_id: {
                user_id: uId,
                webinar_id: wId,
            },
        },
    });

    if (!registration) {
        throw new ApiError(404, "Registration not found");
    }

    if (registration.status === "CANCELLED") {
        throw new ApiError(400, "Webinar is already cancelled");
    }

    if (registration.status === "COMPLETED") {
        throw new ApiError(400, "Cannot cancel a completed webinar");
    }

    // Update status to CANCELLED
    const updatedRegistration = await prisma.user_webinar.update({
        where: {
            user_id_webinar_id: {
                user_id: uId,
                webinar_id: wId,
            },
        },
        data: {
            status: "CANCELLED",
        },
    });

    const serializedRegistration = {
        ...updatedRegistration,
        webinar_id: updatedRegistration.webinar_id.toString(),
    };

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                serializedRegistration,
                "Webinar cancelled successfully"
            )
        );
});
