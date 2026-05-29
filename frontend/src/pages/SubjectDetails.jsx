import { useNavigate, useParams } from "react-router-dom";

const SubjectDetails = () => {
  const { subjectName } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">{subjectName.toUpperCase()}</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div
          onClick={() => navigate(`/test/${subjectName}/easy`)}
          className="bg-slate-900 p-6 rounded-2xl"
        >
          <h2 className="text-2xl font-semibold">Easy Test</h2>

          <p className="text-slate-400 mt-2">10 Questions</p>
        </div>

        <div
          onClick={() => navigate(`/test/${subjectName}/easy`)}
          className="bg-slate-900 p-6 rounded-2xl"
        >
          <h2 className="text-2xl font-semibold">Medium Test</h2>

          <p className="text-slate-400 mt-2">20 Questions</p>
        </div>

        <div
          onClick={() => navigate(`/test/${subjectName}/easy`)}
          className="bg-slate-900 p-6 rounded-2xl"
        >
          <h2 className="text-2xl font-semibold">Hard Test</h2>

          <p className="text-slate-400 mt-2">30 Questions</p>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;
