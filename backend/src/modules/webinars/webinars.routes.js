import express from "express";
import { admin, protect } from "../../middlewares/auth.middleware.js";
import {
  createWebinar,
  deleteWebinar,
  getAllWebinars,
  updateWebinar,
} from "./webinars.controller.js";

const router = express.Router();

router.post("/create-webinar", createWebinar);
router.get("/", getAllWebinars);
router.delete("/:id", deleteWebinar);
router.put("/:id", updateWebinar);

export default router;
