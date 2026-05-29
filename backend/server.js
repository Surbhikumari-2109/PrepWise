require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const app = express();
const resultRoutes = require("./routes/resultRoutes");
connectDB();

app.use(cors());
app.use(express.json());
app.use("/", authRoutes);
app.use("/", resultRoutes);
app.get("/", (req, res) => {
  const resultRoutes = require(
  "./routes/resultRoutes"
);
  res.send("PrepWise Backend Running ");
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