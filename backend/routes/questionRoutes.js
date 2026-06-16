import express from "express";

import {
  addQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
} from "../controllers/questionController.js";

const router = express.Router();

router.post("/questions", addQuestion);

router.get("/questions", getQuestions);

router.put(
  "/questions/:id",
  updateQuestion
);

router.delete(
  "/questions/:id",
  deleteQuestion
);

export default router;