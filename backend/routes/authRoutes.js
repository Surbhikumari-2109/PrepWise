const express = require("express");

console.log("Auth Routes Loaded ✅");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/hello", (req, res) => {
  res.send("Hello from auth routes");
});

module.exports = router;    