import axios from "axios";

const API_URL = "http://localhost:5000";

export const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const getAllResults = async () => {
  const response = await axios.get(`${API_URL}/admin/results`);
  return response.data;
};