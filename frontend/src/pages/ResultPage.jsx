import { useLocation, Link } from "react-router-dom";

const ResultPage = () => {
  const { state } = useLocation();

  console.log("Result State:", state);
  const correctAnswers = state?.score || 0;
  const attempted = state?.attempted || 0;
  const total = state?.total || 0;

  const wrongAnswers = Math.max(0, attempted - correctAnswers);
  const unattempted = Math.max(0, total - attempted);

  const accuracy = total > 0 ? ((correctAnswers / total) * 100).toFixed(0) : 0;

  let message = "";

  if (accuracy >= 80) {
    message = "Excellent Work! 🎉";
  } else if (accuracy >= 50) {
    message = "Good Job 👍";
  } else {
    message = "Keep Practicing 💪";
  }

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center px-4">
      <div className="bg-slate-900 rounded-2xl p-10 w-full max-w-xl text-center shadow-xl">
        <h1 className="text-4xl font-bold text-white">Test Result 🎉</h1>

        <p className="text-6xl font-bold text-violet-400 mt-8">
          {correctAnswers}/{total}
        </p>

        <p className="text-slate-400 mt-2">Questions Correct</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-slate-800 p-4 rounded-xl">
            <h3 className="text-green-400 text-2xl font-bold">
              {correctAnswers}
            </h3>
            <p className="text-slate-400 text-sm">Correct</p>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            <h3 className="text-red-400 text-2xl font-bold">{wrongAnswers}</h3>
            <p className="text-slate-400 text-sm">Wrong</p>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            <h3 className="text-orange-400 text-2xl font-bold">
              {unattempted}
            </h3>
            <p className="text-slate-400 text-sm">Unattempted</p>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            <h3 className="text-yellow-400 text-2xl font-bold">{accuracy}%</h3>
            <p className="text-slate-400 text-sm">Accuracy</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xl font-semibold text-violet-400">{message}</p>
        </div>

        <Link to="/dashboard">
          <button className="mt-8 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl text-white font-medium transition">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
