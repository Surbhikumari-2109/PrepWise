import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAIFeedback } from "../services/aiService";

const ResultPage = () => {
  const { state } = useLocation();

  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const correctAnswers = state?.score || 0;
  const attempted = state?.attempted || 0;
  const total = state?.total || 0;

  const wrongQuestions = state?.wrongQuestions || [];
  const subject = state?.subject || "";

  const wrongAnswers = Math.max(
    0,
    attempted - correctAnswers
  );

  const unattempted = Math.max(
    0,
    total - attempted
  );

  const accuracy =
    total > 0
      ? ((correctAnswers / total) * 100).toFixed(0)
      : 0;

  useEffect(() => {
    const fetchFeedback = async () => {
      if (!wrongQuestions.length) {
        setFeedback(
          " Excellent! You answered all questions correctly."
        );
        return;
      }

      try {
        setLoading(true);

        const aiResponse =
          await getAIFeedback(
            subject,
            wrongQuestions
          );

        setFeedback(aiResponse);
      } catch (error) {
        console.log(error);

        setFeedback(
          "Unable to generate AI feedback right now."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  let message = "";

  if (accuracy >= 80) {
    message = "Excellent Work! ";
  } else if (accuracy >= 50) {
    message = "Good Job ";
  } else {
    message = "Keep Practicing ";
  }

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center px-4 py-10">
      <div className="bg-slate-900 rounded-2xl p-10 w-full max-w-4xl shadow-xl">
        <h1 className="text-4xl font-bold text-white text-center">
          Test Result 
        </h1>

        <p className="text-6xl font-bold text-violet-400 mt-8 text-center">
          {correctAnswers}/{total}
        </p>

        <p className="text-slate-400 mt-2 text-center">
          Questions Correct
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-slate-800 p-4 rounded-xl text-center">
            <h3 className="text-green-400 text-2xl font-bold">
              {correctAnswers}
            </h3>
            <p className="text-slate-400 text-sm">
              Correct
            </p>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl text-center">
            <h3 className="text-red-400 text-2xl font-bold">
              {wrongAnswers}
            </h3>
            <p className="text-slate-400 text-sm">
              Wrong
            </p>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl text-center">
            <h3 className="text-orange-400 text-2xl font-bold">
              {unattempted}
            </h3>
            <p className="text-slate-400 text-sm">
              Unattempted
            </p>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl text-center">
            <h3 className="text-yellow-400 text-2xl font-bold">
              {accuracy}%
            </h3>
            <p className="text-slate-400 text-sm">
              Accuracy
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-violet-400">
            {message}
          </p>
        </div>

        {/* AI Feedback Section */}

        <div className="mt-10 bg-slate-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-violet-400 mb-4">
            🤖 AI Feedback
          </h2>

          {loading ? (
            <p className="text-slate-300">
              Analyzing your performance...
            </p>
          ) : (
            <div className="text-slate-300 whitespace-pre-wrap leading-7">
              {feedback}
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <Link to="/dashboard">
            <button className="mt-8 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl text-white font-medium transition">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;