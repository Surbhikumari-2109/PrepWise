import { useParams } from "react-router-dom";
import { questionBank } from "../data/questions";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveResult } from "../services/resultService";

const TestPage = () => {
  const { subjectName, level } = useParams();
  const questions =
    questionBank[subjectName.toLowerCase()]?.[level.toLowerCase()] || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const navigate = useNavigate();

  if (questions.length === 0) {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-3xl font-bold">
        No Questions Available
      </h1>

      <p className="mt-4">
        Subject: {subjectName}
      </p>

      <p>
        Level: {level}
      </p>
      <button
          onClick={() => navigate("/subjects")}
          className="mt-6 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl"
        >
          Back to Subjects
        </button>
    </div>
  );
}
  const question = questions[currentQuestion];
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          submitTest();

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const selectAnswer = (option) => {
    const updatedAnswers = [...selectedAnswers];

    updatedAnswers[currentQuestion] = option;

    setSelectedAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitTest = async () => {
    try {
      let score = 0;

      questions.forEach((question, index) => {
        if (selectedAnswers[index] === question.answer) {
          score++;
        }
      });
      const attempted = selectedAnswers.filter(
        (answer) => answer != null,
      ).length;

      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);

      await saveResult({
        userId: user.id,
        userName: user.name,
        subject: subjectName,
        score,
        total: questions.length,
      });
      console.log({
        selectedAnswers,
        score,
        attempted,
        total: questions.length,
      });

      navigate("/result", {
        state: {
          score,
          attempted,
          total: questions.length,
        },
      });
    } catch (error) {
      console.log(error);

      console.log(error.response?.data);

      alert("Error saving result");
    }
  };
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">{subjectName.toUpperCase()}</h1>

      <p className="text-violet-400 text-xl">{level.toUpperCase()} TEST</p>
      <div className="mt-4">
        <span className="bg-red-500 px-4 py-2 rounded-lg font-bold">
           Time Left: {minutes}:{seconds.toString().padStart(2, "0")}
        </span>
      </div>

      <div className="bg-slate-900 p-8 rounded-2xl mt-10">
        <h2 className="text-2xl font-semibold">
          Question {currentQuestion + 1} of {questions.length}
        </h2>

        <p className="mt-6 text-lg">{question.question}</p>

        <div className="mt-6 space-y-4">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => selectAnswer(option)}
              className={`w-full p-4 rounded-xl text-left
    ${
      selectedAnswers[currentQuestion] === option
        ? "bg-violet-600"
        : "bg-slate-800 hover:bg-slate-700"
    }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-xl ${
              currentQuestion === 0
                ? "bg-slate-700 cursor-not-allowed"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            ← Previous
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={submitTest}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl"
            >
              Submit Test
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
