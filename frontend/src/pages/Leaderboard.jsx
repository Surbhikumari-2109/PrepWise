import { useEffect, useState } from "react";
import { getLeaderboard } from "../services/leaderboardService";
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const data = await getLeaderboard();
      setLeaders(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
           Leaderboard
        </h1>
    
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-xl"
        >
          Back
        </button>
      </div>

      <div className="bg-slate-900 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="text-left p-4">Rank</th>
              <th className="text-left p-4">User</th>
              <th className="text-left p-4">Total Score</th>
            </tr>
          </thead>

          <tbody>
            {leaders.map((user, index) => (
              <tr
                key={index}
                className="border-b border-slate-800"
              >
                <td className="p-4 font-bold">
                  #{index + 1}
                </td>

                <td className="p-4">
                  {user._id}
                </td>

                <td className="p-4 text-green-400 font-bold">
                  {user.totalScore}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;