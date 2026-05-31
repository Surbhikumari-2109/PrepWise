import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020617] text-white p-8">
      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

      <p className="text-slate-400 mt-2">
        Manage platform activity and users.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-semibold">
            👥 Users
          </h2>
          <p className="text-slate-400 mt-2">
            View all registered users
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-semibold">
            📊 Results
          </h2>
          <p className="text-slate-400 mt-2">
            Monitor student performance
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-semibold">
            📝 Question Bank
          </h2>
          <p className="text-slate-400 mt-2">
            Manage assessment questions
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-semibold">
            🏆 Leaderboard
          </h2>
          <p className="text-slate-400 mt-2">
            Track rankings
          </p>
        </div>

      </div>

      <div className="mt-10">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-violet-600 hover:bg-violet-700 px-5 py-3 rounded-lg"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;