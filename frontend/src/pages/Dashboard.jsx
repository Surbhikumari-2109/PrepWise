import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getResults } from "../services/resultService";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [results, setResults] = useState([]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const data = await getResults(user.id);

      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // Dashboard Analytics
  // =========================

  const totalTests = results.length;

  const totalScore = results.reduce(
    (sum, result) => sum + result.score,
    0
  );

  const totalQuestions = results.reduce(
    (sum, result) => sum + result.total,
    0
  );

  const accuracy =
    totalQuestions > 0
      ? ((totalScore / totalQuestions) * 100).toFixed(0)
      : 0;

  const bestScore =
    results.length > 0
      ? Math.max(...results.map((r) => r.score))
      : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">
            Welcome Back, {user?.name} 👋
          </h1>

          <p className="text-slate-400 mt-2">
            Let's continue your learning journey
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/subjects")}
            className="bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-xl"
          >
            Take a Test
          </button>

          <button
            onClick={logoutHandler}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400">Tests Attempted</h3>

          <p className="text-3xl font-bold mt-2">
            {totalTests}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400">Accuracy</h3>

          <p className="text-3xl font-bold text-green-400 mt-2">
            {accuracy}%
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400">Total Score</h3>

          <p className="text-3xl font-bold text-violet-400 mt-2">
            {totalScore}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400">Best Score</h3>

          <p className="text-3xl font-bold text-yellow-400 mt-2">
            {bestScore}
          </p>
        </div>
      </div>

      {/* Recent Tests */}
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 mt-10">
        <h2 className="text-xl font-semibold mb-6">
          Recent Tests
        </h2>

        {results.length === 0 ? (
          <p className="text-slate-400">
            No tests attempted yet.
          </p>
        ) : (
          <div className="space-y-4">
            {results
              .slice()
              .reverse()
              .map((result) => (
                <div
                  key={result._id}
                  className="flex justify-between border-b border-slate-800 pb-3"
                >
                  <span className="capitalize">
                    {result.subject}
                  </span>

                  <span className="text-green-400">
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