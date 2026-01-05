import express from "express";
import authRoutes from "./modules/auth/auth.routes.js";
import userRoutes from "./modules/user/user.routes.js";
import paymentRoutes from "./modules/payment/payment.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/payment", paymentRoutes);

export default router;
