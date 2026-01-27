import express from "express";
import { getAllUsers, getSubscriptionPlan, getMySubscription, getMyWebinars } from "./user.controller.js";
import { joinWebinar, cancelWebinar } from "./join_webinar.controller.js";
import { admin, protect } from "../../middlewares/auth.middleware.js";

const router = express.Router();

// Allow public or protected? User usually wants protected.
// Added protect middleware to ensure only authenticated users can see other users.
router.get(
  "/",
  protect,
  admin,
  getAllUsers
);

router.get(
  "/my-subscription",
  protect,
  getMySubscription
);

router.get(
  "/my-webinars",
  protect,
  getMyWebinars
);

router.get(
  "/subscription/:userId",
  protect,
  admin,
  getSubscriptionPlan
);

router.post(
  "/join-webinar",
  protect,
  joinWebinar
);

router.post(
  "/cancel-webinar",
  protect,
  cancelWebinar
);

export default router;
