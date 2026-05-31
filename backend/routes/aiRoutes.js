import express from "express";
import { getAIFeedback } from "../controllers/aiController.js";

const router = express.Router();

router.post("/ai-feedback", getAIFeedback);

export default router;