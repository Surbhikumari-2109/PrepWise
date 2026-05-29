const express = require("express");

const { saveResult } = require("../controllers/resultController");
const {getUserResults,} = require("../controllers/resultController");
const router = express.Router();

router.post("/result", saveResult);
router.get("/results/:userId", getUserResults);

module.exports = router;
