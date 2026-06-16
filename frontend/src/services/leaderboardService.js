import axios from "axios";

export const getLeaderboard = async () => {
  const response = await axios.get(
    "https://prepwise-q4c3.onrender.com/leaderboard"
  );

  return response.data;
};