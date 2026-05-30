import { useEffect, useState } from "react";
import { getResults } from "../services/resultService";

const TestHistory = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const data = await getResults(user.id);

      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Test History 📜
      </h1>

      <div className="bg-slate-900 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="text-left p-4">Subject</th>
              <th className="text-left p-4">Score</th>
              <th className="text-left p-4">Accuracy</th>
              <th className="text-left p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {results.map((result) => (
              <tr
                key={result._id}
                className="border-b border-slate-800"
              >
                <td className="p-4 capitalize">
                  {result.subject}
                </td>

                <td className="p-4">
                  {result.score}/{result.total}
                </td>

                <td className="p-4">
                  {Math.round(
                    (result.score / result.total) * 100
                  )}
                  %
                </td>

                <td className="p-4">
                  {new Date(
                    result.createdAt
                  ).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestHistory;