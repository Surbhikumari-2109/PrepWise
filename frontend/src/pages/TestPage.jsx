import { useParams } from "react-router-dom";
import { questions } from "../data/questions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveResult } from "../services/resultService";

const TestPage = () => {
  const { subjectName, level } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const navigate = useNavigate();
  const question = questions[currentQuestion];
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
      if (
        selectedAnswers[index] === question.answer
      ) {
        score++;
      }
    });

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    await saveResult({
      userId: user.id,
      subject: subjectName,
      score,
      total: questions.length,
    });

    navigate("/result", {
      state: {
        score,
        total: questions.length,
      },
    });

  } catch (error) {
  console.log(error);

  console.log(error.response?.data);

  alert("Error saving result");
}
  }
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">{subjectName.toUpperCase()}</h1>

      <p className="text-violet-400 text-xl">{level.toUpperCase()} TEST</p>

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
