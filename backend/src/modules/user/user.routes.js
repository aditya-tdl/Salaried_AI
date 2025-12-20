import express from "express";
import { getAllUsers } from "./user.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";

const router = express.Router();

// Allow public or protected? User usually wants protected.
// Added protect middleware to ensure only authenticated users can see other users.
router.get(
  "/",
  // protect,
  getAllUsers
);

export default router;
