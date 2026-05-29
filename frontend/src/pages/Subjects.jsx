const subjects = [
  "DSA",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Java",
  "SQL",
  "JavaScript",
  "React",
  "Aptitude",
];

const Subjects = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-10">
        Choose a Subject 📚
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {subjects.map((subject) => (
          <div
            key={subject}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-violet-500 cursor-pointer transition"
          >
            <h2 className="text-2xl font-semibold">
              {subject}
            </h2>

            <p className="text-slate-400 mt-2">
              Practice questions and tests
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Subjects;