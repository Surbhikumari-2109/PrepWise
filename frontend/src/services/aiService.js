import axios from "axios";

export const getAIFeedback = async (
  subject,
  wrongQuestions
) => {
  const response = await axios.post(
    "http://localhost:5000/ai-feedback",
    {
      subject,
      wrongQuestions,
    }
  );

  return response.data.feedback;
};