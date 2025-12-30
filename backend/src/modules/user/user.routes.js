import express from "express";
import { getAllUsers } from "./user.controller.js";
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

export default router;
