import { FaBrain, FaChartLine, FaTrophy } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-violet-400">
          PrepWise
        </h1>

        <div className="space-x-4">
          <button className="px-5 py-2 rounded-lg border border-slate-700 hover:border-violet-500">
            Login
          </button>

          <button className="px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-700">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Learn Smarter with
          <span className="text-violet-400"> AI</span>
        </h1>

        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
          Take tests, analyze performance, compete on leaderboards,
          and receive AI-powered explanations to improve faster.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-violet-600 px-8 py-4 rounded-xl text-lg hover:bg-violet-700">
            Get Started
          </button>

          <button className="border border-slate-700 px-8 py-4 rounded-xl text-lg hover:border-violet-500">
            Explore Features
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose PrepWise?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <FaBrain className="text-4xl text-violet-400 mb-4" />

            <h3 className="text-xl font-semibold mb-3">
              AI Explanations
            </h3>

            <p className="text-slate-400">
              Understand every mistake with detailed AI-generated
              explanations and examples.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <FaChartLine className="text-4xl text-violet-400 mb-4" />

            <h3 className="text-xl font-semibold mb-3">
              Performance Analytics
            </h3>

            <p className="text-slate-400">
              Track accuracy, strengths, weaknesses and improvement
              over time.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <FaTrophy className="text-4xl text-violet-400 mb-4" />

            <h3 className="text-xl font-semibold mb-3">
              Global Leaderboards
            </h3>

            <p className="text-slate-400">
              Compete with learners worldwide and climb the rankings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;