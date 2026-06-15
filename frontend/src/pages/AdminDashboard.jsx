import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllUsers,
  getAllResults,
} from "../services/adminService";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const usersData = await getAllUsers();
      const resultsData = await getAllResults();

      setUsers(usersData);
      setResults(resultsData);
    } catch (error) {
      console.log(error);
    }
  };

  const uniqueSubjects = new Set(
    results.map((result) => result.subject)
  ).size;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">

        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Monitor users, quizzes and platform activity.
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-violet-600 hover:bg-violet-700 px-5 py-3 rounded-xl transition"
        >
          Back to Home
        </button>

      </div>

      {/* Stats Cards */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="text-slate-400 text-sm">
            Total Users
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {users.length}
          </h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="text-slate-400 text-sm">
            Total Results
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {results.length}
          </h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="text-slate-400 text-sm">
            Subjects Covered
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {uniqueSubjects}
          </h2>
        </div>

      </div>

      {/* Main Section */}

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        {/* Registered Users */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-6">
            Registered Users
          </h2>

          <div className="space-y-4">

            {users.map((user) => (
              <div
                key={user._id}
                className="flex justify-between items-center border-b border-slate-800 pb-4"
              >

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <p className="font-medium">
                      {user.name}
                    </p>
                  </div>

                </div>

                <span className="text-slate-400 text-sm">
                  {user.email}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* Recent Results */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-6">
            Recent Results
          </h2>

          <div className="space-y-4">

            {results.slice(0, 10).map((result) => (
              <div
                key={result._id}
                className="flex justify-between items-center border-b border-slate-800 pb-4"
              >

                <div>
                  <p className="font-medium">
                    {result.userName}
                  </p>

                  <p className="text-slate-400 text-sm">
                    {result.subject}
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
                  {result.score}/{result.total}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;