import express from "express";
import {
  createWorkout,
  getWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";

const router = express.Router();

// Get all workout
router.get("/", getWorkout);

// Get single workout
router.get("/:id", getSingleWorkout);

//  Create workout
router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

export { router as workoutRouter };
