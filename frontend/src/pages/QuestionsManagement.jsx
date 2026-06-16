import { useEffect, useState } from "react";
import {
  getQuestions,
  deleteQuestion,
} from "../services/questionService";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const QuestionsManagement = () => {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const data = await getQuestions();
      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this question?"
    );

    if (!confirmDelete) return;

    try {
      await deleteQuestion(id);

      toast.success(
        "Question Deleted Successfully"
      );

      fetchQuestions();
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  const filteredQuestions =
    questions.filter((q) =>
      q.question
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold">
            Question Management
          </h1>

          <p className="text-slate-400 mt-2">
            Manage all platform questions
          </p>
        </div>

        <Link
          to="/admin/questions/add"
          className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl"
        >
          + Add Question
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search Question..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 mb-8"
      />

      <div className="space-y-4">

        {filteredQuestions.map((q) => (
          <div
            key={q._id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="font-semibold text-lg">
                  {q.question}
                </h2>

                <div className="flex gap-3 mt-3">

                  <span className="bg-violet-600/20 text-violet-400 px-3 py-1 rounded-full text-sm">
                    {q.subject}
                  </span>

                  <span className="bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    {q.difficulty}
                  </span>

                </div>
              </div>

              <div className="flex gap-3">

                <Link
                  to={`/admin/questions/edit/${q._id}`}
                  className="bg-amber-500 px-4 py-2 rounded-lg"
                >
                  Edit
                </Link>

                <button
                  onClick={() =>
                    handleDelete(q._id)
                  }
                  className="bg-red-500 px-4 py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default QuestionsManagement;