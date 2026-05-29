import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Welcome Back, {user?.name} 👋</h1>

          <p className="text-slate-400 mt-2">
            Let's continue your learning journey
          </p>
        </div>

        <button
          onClick={logoutHandler}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl"
        >
          Logout
        </button>
        <button
          onClick={() => navigate("/subjects")}
          className="bg-violet-600 px-5 py-2 rounded-xl"
        >
          Take a Test
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400">Tests Attempted</h3>

          <p className="text-3xl font-bold mt-2">24</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400">Accuracy</h3>

          <p className="text-3xl font-bold text-green-400 mt-2">82%</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400">Average Score</h3>

          <p className="text-3xl font-bold text-violet-400 mt-2">78%</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400">Global Rank</h3>

          <p className="text-3xl font-bold text-yellow-400 mt-2">#12</p>
        </div>
      </div>

      {/* Progress + Recent Tests */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {/* Subject Progress */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-semibold mb-6">Subject Progress</h2>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between">
                <span>DSA</span>
                <span>80%</span>
              </div>

              <div className="w-full bg-slate-700 h-2 rounded-full mt-2">
                <div className="bg-violet-500 h-2 w-4/5 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>DBMS</span>
                <span>70%</span>
              </div>

              <div className="w-full bg-slate-700 h-2 rounded-full mt-2">
                <div className="bg-violet-500 h-2 w-[70%] rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>OS</span>
                <span>90%</span>
              </div>

              <div className="w-full bg-slate-700 h-2 rounded-full mt-2">
                <div className="bg-violet-500 h-2 w-[90%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Tests */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-semibold mb-6">Recent Tests</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>DBMS Mock Test</span>
              <span className="text-green-400">85%</span>
            </div>

            <div className="flex justify-between">
              <span>DSA Practice Test</span>
              <span className="text-yellow-400">75%</span>
            </div>

            <div className="flex justify-between">
              <span>OS Concepts Test</span>
              <span className="text-green-400">90%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
