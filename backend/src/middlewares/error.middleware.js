import ApiError from "../utils/ApiError.js";

const errorMiddleware = (err, req, res, next) => {
    let error = err;

    // If error is not an instance of ApiError, convert it
    if (!(error instanceof ApiError)) {
        const statusCode = error.statusCode || 500;
        const message = error.message || "Internal Server Error";
        error = new ApiError(statusCode, message, [], err.stack);
    }

    const response = {
        success: false,
        message: error.message,
        ...(process.env.NODE_ENV === "development" ? { stack: error.stack } : {}),
        errors: error.errors,
    };

    res.status(error.statusCode).json(response);
};

export default errorMiddleware;
