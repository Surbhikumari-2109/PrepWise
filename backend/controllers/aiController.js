import { analyzeWrongAnswers } from "../services/geminiService.js";

export const getAIFeedback = async (req, res) => {
  try {
    const { subject, wrongQuestions } = req.body;

    const feedback =
      await analyzeWrongAnswers(
        subject,
        wrongQuestions
      );

    res.json({
      feedback,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};