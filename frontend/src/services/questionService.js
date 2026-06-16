import axios from "axios";

const API_URL =
  "https://prepwise-q4c3.onrender.com";

export const getQuestions = async () => {
  const response = await axios.get(
    `${API_URL}/questions`
  );

  return response.data;
};

export const deleteQuestion = async (
  id
) => {
  const response = await axios.delete(
    `${API_URL}/questions/${id}`
  );

  return response.data;
};

export const addQuestion = async (
  questionData
) => {
  const response = await axios.post(
    `${API_URL}/questions`,
    questionData
  );

  return response.data;
};

export const updateQuestion = async (
  id,
  questionData
) => {
  const response = await axios.put(
    `${API_URL}/questions/${id}`,
    questionData
  );

  return response.data;
};