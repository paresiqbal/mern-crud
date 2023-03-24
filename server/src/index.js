import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(process.env.PORT, () => console.log("Server Running port 3001"));
