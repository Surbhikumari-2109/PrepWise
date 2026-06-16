import axios from "axios";

const API_URL = "https://prepwise-q4c3.onrender.com";
export const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const getAllResults = async () => {
  const response = await axios.get(`${API_URL}/admin/results`);
  return response.data;
};