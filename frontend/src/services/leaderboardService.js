import axios from "axios";

export const getLeaderboard = async () => {
  const response = await axios.get(
    "http://localhost:5000/leaderboard"
  );

  return response.data;
};