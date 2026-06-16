import axios from "axios";

export const saveResult = async (
  resultData
) => {
    console.log("SENDING:", resultData);
  const response = await axios.post(
    "https://prepwise-q4c3.onrender.com/result",
    resultData
  );

  return response.data;
};

export const getResults = async (
  userId
) => {
  const response = await axios.get(
    `https://prepwise-q4c3.onrender.com/results/${userId}`
  );

  return response.data;
};