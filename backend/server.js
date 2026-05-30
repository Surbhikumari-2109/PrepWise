import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/", authRoutes);
app.use("/", resultRoutes);

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