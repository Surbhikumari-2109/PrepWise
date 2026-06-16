import axios from "axios";

export const getAIFeedback = async (
  subject,
  wrongQuestions
) => {
  const response = await axios.post(
    "https://prepwise-q4c3.onrender.com/ai-feedback",
    {
      subject,
      wrongQuestions,
    }
  );

  return response.data.feedback;
};