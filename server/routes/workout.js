import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get all workout" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "Get some workout" });
});

//  POST
router.post("/", (req, res) => {
  res.json({ message: "Post new workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Delete Workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "Update workout" });
});

export { router as workoutRouter };
