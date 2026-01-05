import express from "express";
import { admin, protect } from "../../middlewares/auth.middleware.js";
import { createSubscription } from "./payment.controller.js";

const router = express.Router();

router.post(
  "/create",
  // protect,
  // admin,
  createSubscription
);

export default router;
