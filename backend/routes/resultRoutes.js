import express from "express";

import {
  saveResult,
  getUserResults,
  getLeaderboard,
  getAllResults,
} from "../controllers/resultController.js";

const router = express.Router();

router.post("/result", saveResult);

router.get("/leaderboard", getLeaderboard);

router.get("/results/:userId", getUserResults);

router.get("/admin/results", getAllResults);

export default router;