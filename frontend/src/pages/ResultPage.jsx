import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const { state } = useLocation();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">

      <div className="bg-slate-900 p-10 rounded-2xl text-center">

        <h1 className="text-4xl font-bold">
          Test Result 🎉
        </h1>

        <p className="text-2xl mt-6">
          Score: {state.score}/{state.total}
        </p>

      </div>

    </div>
  );
};

export default ResultPage;