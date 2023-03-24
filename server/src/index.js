import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

import { workoutRouter } from "../routes/workout.js";

const app = express();
dotenv.config();

// midleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workout", workoutRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => console.log("Server Running port 3001"));
  })
  .catch((error) => {
    console.log(error);
  });
