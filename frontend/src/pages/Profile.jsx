import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getResults } from "../services/resultService";

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const data = await getResults(user.id);
      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };

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
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          My Profile
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-xl"
        >
          Back to Dashboard
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <div className="flex flex-col items-center">

          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-4xl font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <h2 className="text-3xl font-bold mt-4">
            {user?.name}
          </h2>

          <p className="text-slate-400 mt-1">
            {user?.email}
          </p>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">
              Tests Attempted
            </p>

            <h3 className="text-4xl font-bold mt-2">
              {totalTests}
            </h3>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">
              Total Score
            </p>

            <h3 className="text-4xl font-bold text-violet-400 mt-2">
              {totalScore}
            </h3>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">
              Best Score
            </p>

            <h3 className="text-4xl font-bold text-yellow-400 mt-2">
              {bestScore}
            </h3>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">
              Accuracy
            </p>

            <h3 className="text-4xl font-bold text-green-400 mt-2">
              {accuracy}%
            </h3>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <button
            onClick={() => navigate("/history")}
            className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl"
          >
            View History
          </button>

          <button
            onClick={() => navigate("/subjects")}
            className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-xl"
          >
            Take Test
          </button>

        </div>

      </div>
    </div>
  );
};

export default Profile;