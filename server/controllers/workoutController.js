import mongoose from "mongoose";
import { WorkoutModel } from "../models/workoutModel.js";

// get all workout
const getWorkout = async (req, res) => {
  const workout = await WorkoutModel.find({}).sort({ craetedAt: -1 });

  res.status(200).json(workout);
};

// get a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await WorkoutModel.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  // add doc to db
  try {
    const workout = await WorkoutModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.json(error);
  }
};

// delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await WorkoutModel.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await WorkoutModel.findOneAndUpdate(
    { _id: id },
    {
      ...res.body,
    }
  );
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

export {
  createWorkout,
  getWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
};
