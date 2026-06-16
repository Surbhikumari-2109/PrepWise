import axios from "axios";

const API_URL = "https://prepwise-q4c3.onrender.com";

export const getSubjects = async () => {
  const response = await axios.get(
    `${API_URL}/subjects`
  );

  return response.data;
};

export const addSubject = async (
  subjectData
) => {
  const response = await axios.post(
    `${API_URL}/subjects`,
    subjectData
  );

  return response.data;
};

export const deleteSubject = async (
  id
) => {
  const response = await axios.delete(
    `${API_URL}/subjects/${id}`
  );

  return response.data;
};