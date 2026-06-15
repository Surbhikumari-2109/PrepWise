import { useEffect, useState } from "react";
import { getLeaderboard } from "../services/leaderboardService";
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

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

  const getMedal = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return `#${index + 1}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">

      {/* Header */}

      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            🏆 Leaderboard
          </h1>

          <p className="text-slate-400 mt-2">
            See how you rank against other learners.
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-violet-600 hover:bg-violet-700 px-5 py-3 rounded-xl"
        >
          Back to Dashboard
        </button>

      </div>

      {/* Table */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-800">
            <tr>
              <th className="text-left p-5">Rank</th>
              <th className="text-left p-5">User</th>
              <th className="text-left p-5">Total Score</th>
            </tr>
          </thead>

          <tbody>

            {leaders.map((user, index) => (

              <tr
                key={index}
                className={`border-b border-slate-800 hover:bg-slate-800/50 transition
                ${
                  user._id === currentUser?.name
                    ? "bg-violet-500/10"
                    : ""
                }`}
              >

                {/* Rank */}

                <td className="p-5 text-xl font-bold">
                  {getMedal(index)}
                </td>

                {/* User */}

                <td className="p-5">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold">
                      {user._id?.charAt(0).toUpperCase()}
                    </div>

                    <span className="font-medium">
                      {user._id}
                    </span>

                  </div>

                </td>

                {/* Score */}

                <td className="p-5">

                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 font-bold">
                    {user.totalScore}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Total Participants */}

      <div className="mt-6 text-slate-400 text-center">
        Total Participants: {leaders.length}
      </div>

    </div>
  );
};

export default Leaderboard;