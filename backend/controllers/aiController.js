import { analyzeWrongAnswers } from "../services/geminiService.js";

export const getAIFeedback = async (req, res) => {
  try {
    const { subject, wrongQuestions } = req.body;

    console.log("SUBJECT:", subject);
    console.log("WRONG QUESTIONS:", wrongQuestions);

    const feedback = await analyzeWrongAnswers(
      subject,
      wrongQuestions
    );

    res.json({ feedback });
  } catch (error) {
    console.error("AI ERROR:", error);
    console.error("MESSAGE:", error.message);

    res.status(500).json({
      message: error.message,
    });
  }
};