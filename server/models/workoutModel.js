import mongoose from "mongoose";

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: { type: String, require: true },
    reps: { type: Number, require: true },
    load: { type: Number, require: true },
    user_id: { type: String, require: true },
  },
  { timestamps: true }
);

export const WorkoutModel = mongoose.model("Workout", workoutSchema);
