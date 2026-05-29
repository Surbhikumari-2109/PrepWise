import { FaBrain, FaChartLine, FaTrophy } from "react-icons/fa";

const Features = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose PrepWise?
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-violet-500 transition-all duration-300">
          <FaBrain className="text-4xl text-violet-400 mb-4" />

          <h3 className="text-2xl font-semibold mb-3">
            AI Explanations
          </h3>

          <p className="text-slate-400">
            Get detailed AI-powered explanations for every answer
            and understand concepts faster.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-violet-500 transition-all duration-300">
          <FaChartLine className="text-4xl text-violet-400 mb-4" />

          <h3 className="text-2xl font-semibold mb-3">
            Analytics
          </h3>

          <p className="text-slate-400">
            Track your performance, accuracy, strengths and
            weaknesses through beautiful dashboards.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-violet-500 transition-all duration-300">
          <FaTrophy className="text-4xl text-violet-400 mb-4" />

          <h3 className="text-2xl font-semibold mb-3">
            Leaderboards
          </h3>

          <p className="text-slate-400">
            Compete with students globally and climb the rankings
            with every test you take.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;