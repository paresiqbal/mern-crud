import express from "express";
import {
  createWorkout,
  getWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";
import { requireAuth } from "../middleware/requireAuth.js";
const router = express.Router();

router.use(requireAuth);

// Get all workout
router.get("/", getWorkout);

// Get single workout
router.get("/:id", getSingleWorkout);

//  Create workout
router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

export { router as workoutRouter };
