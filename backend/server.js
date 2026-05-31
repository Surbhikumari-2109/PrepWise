import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";

import aiRoutes from "./routes/aiRoutes.js";


console.log("KEY EXISTS:", !!process.env.GEMINI_API_KEY);
console.log(
  "KEY PREFIX:",
  process.env.GEMINI_API_KEY?.substring(0, 10)
);

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/", authRoutes);
app.use("/", resultRoutes);
app.use("/", aiRoutes);

app.get("/", (req, res) => {
  res.send("PrepWise Backend Running");
});

app.post("/test", (req, res) => {
  res.json({
    message: "Test route working",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});