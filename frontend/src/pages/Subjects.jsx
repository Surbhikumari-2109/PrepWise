import { useNavigate } from "react-router-dom";
const subjects = [
  "DSA",
  "DBMS",
  "Java",
  "Computer Networks",
  "Operating Systems",
  "SQL",
  "JavaScript",
  "React",
  "Aptitude",
];

const Subjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Choose a Subject 📚</h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 md:mt-0 bg-violet-600 hover:bg-violet-700 px-5 py-3 rounded-xl transition"
        >
          Back to Dashboard
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject}
            onClick={() => navigate(`/subject/${subject.toLowerCase()}`)}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-violet-500 cursor-pointer transition"
          >
            <h2 className="text-2xl font-semibold">{subject}</h2>

            <p className="text-slate-400 mt-2">Practice questions and tests</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
