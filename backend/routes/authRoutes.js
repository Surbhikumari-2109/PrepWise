import express from "express";

console.log("Auth Routes Loaded ✅");

import {
  registerUser,
  loginUser,
  getAllUsers,
} from "../controllers/authController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/hello", (req, res) => {
  res.send("Hello from auth routes");
});
router.get("/users", getAllUsers);

export default router;