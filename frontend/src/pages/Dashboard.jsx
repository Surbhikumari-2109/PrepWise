const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold">
        Welcome Back, Surbhi 👋
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mt-10">

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h3 className="text-slate-400">
            Tests Attempted
          </h3>

          <p className="text-3xl font-bold">
            24
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h3 className="text-slate-400">
            Accuracy
          </h3>

          <p className="text-3xl font-bold text-green-400">
            82%
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h3 className="text-slate-400">
            Rank
          </h3>

          <p className="text-3xl font-bold">
            #12
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h3 className="text-slate-400">
            Streak
          </h3>

          <p className="text-3xl font-bold text-orange-400">
            15🔥
          </p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;