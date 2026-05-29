import axios from "axios";

export const saveResult = async (
  resultData
) => {
  const response = await axios.post(
    "http://localhost:5000/result",
    resultData
  );

  return response.data;
};

export const getResults = async (
  userId
) => {
  const response = await axios.get(
    `http://localhost:5000/results/${userId}`
  );

  return response.data;
};