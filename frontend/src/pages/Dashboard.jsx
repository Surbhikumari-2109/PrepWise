import { Link, useNavigate } from "react-router-dom";import { useEffect, useState } from "react";
import { getResults } from "../services/resultService";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [results, setResults] = useState([]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const data = await getResults(user.id);
      console.log("USER ID:", user.id);
      console.log("RESULTS:", data);

      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Dashboard Analytics

  const totalTests = results.length;

  const totalScore = results.reduce((sum, result) => sum + result.score, 0);

  const totalQuestions = results.reduce((sum, result) => sum + result.total, 0);

  const accuracy =
    totalQuestions > 0 ? ((totalScore / totalQuestions) * 100).toFixed(0) : 0;

  const bestScore =
    results.length > 0 ? Math.max(...results.map((r) => r.score)) : 0;
  console.log(results);
  return (
    
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <Link
  to="/"
  className="inline-flex items-center gap-2 text-lg font-medium text-violet-400 hover:text-violet-300 transition"
>
  ← Home
</Link>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">
            Welcome Back, {user?.name} 
          </h1>

          <p className="text-slate-400 mt-2">
            Let's continue your learning journey
          </p>
        </div>
        <div className="grid grid-cols-2 md:flex gap-3 w-full md:w-auto">
          {" "}
          <button
            onClick={() => navigate("/subjects")}
            className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-xl"
          >
            Take a Test
          </button>
          <button
            onClick={() => navigate("/leaderboard")}
            className=" w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-xl text-black font-semibold"
          >
            Leaderboard
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl"
          >
            Profile
          </button>
          <button
            onClick={logoutHandler}
            className=" w-full md:w-auto bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl"
          >
            Logout
          </button>
        </div>{" "}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400">Tests Attempted</h3>

          <p className="text-3xl font-bold mt-2">{totalTests}</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400">Accuracy</h3>

          <p className="text-3xl font-bold text-green-400 mt-2">{accuracy}%</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400">Total Score</h3>

          <p className="text-3xl font-bold text-violet-400 mt-2">
            {totalScore}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400">Best Score</h3>

          <p className="text-3xl font-bold text-yellow-400 mt-2">{bestScore}</p>
        </div>
      </div>

      {/* Recent Tests */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 mt-10">
        <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-slate-800 py-4 gap-2">
          <h2 className="text-xl font-semibold">Recent Tests</h2>

          <button
            onClick={() => navigate("/history")}
            className="text-violet-400 hover:text-violet-300"
          >
            View Full History →
          </button>
        </div>

        {results.length === 0 ? (
          <p className="text-slate-400">No tests attempted yet.</p>
        ) : (
          <div className="space-y-4">
            {results.slice(0, 5).map((result) => (
              <div
                key={result._id}
                className="flex justify-between items-center border-b border-slate-800 py-4"
              >
                <div>
                  <p className="capitalize text-lg md:text-3xl font-semibold">
                    {" "}
                    {result.subject}
                  </p>

                  <p className="text-sm text-slate-400">
                    {new Date(result.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <span className="text-green-400 font-semibold text-lg md:text-3xl">
                  {" "}
                  {result.score}/{result.total}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
