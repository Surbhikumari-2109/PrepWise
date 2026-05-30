import { useEffect, useState } from "react";
import { getResults } from "../services/resultService";

const Profile = () => {
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
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        👤 My Profile
      </h1>

      <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">

        <div className="space-y-4 mb-8">
          <p>
            <span className="font-semibold">
              Name:
            </span>{" "}
            {user.name}
          </p>

          <p>
            <span className="font-semibold">
              Email:
            </span>{" "}
            {user.email}
          </p>
        </div>

        <hr className="border-slate-700 mb-8" />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-4 rounded-xl">
            Tests Attempted: {totalTests}
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            Total Score: {totalScore}
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            Best Score: {bestScore}
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            Accuracy: {accuracy}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;