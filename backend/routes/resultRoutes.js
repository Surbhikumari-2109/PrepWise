import express from "express";

import {
  saveResult,
  getUserResults,
  getLeaderboard,
} from "../controllers/resultController.js";

const router = express.Router();

router.post("/result", saveResult);

router.get("/leaderboard", getLeaderboard);

router.get("/results/:userId", getUserResults);

export default router;