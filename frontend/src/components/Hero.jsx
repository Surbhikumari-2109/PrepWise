const Hero = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 h-72 w-72 bg-violet-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute right-20 top-40 h-72 w-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Learn.
            <br />
            Practice.
            <br />
            <span className="text-violet-400">
              Improve.
            </span>
          </h1>

          <p className="text-slate-400 mt-6 text-lg">
            AI-powered learning platform that helps students
            test their knowledge, track progress and climb
            leaderboards.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-violet-600 px-8 py-4 rounded-xl hover:bg-violet-700">
              Get Started
            </button>

            <button className="border border-slate-700 px-8 py-4 rounded-xl">
              Take a Test
            </button>
          </div>
        </div>

        {/* Right Dashboard Preview */}
        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">

          <h2 className="text-2xl font-semibold mb-6">
            Dashboard Preview
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-slate-800 p-4 rounded-xl">
              <h3 className="text-slate-400">
                Tests
              </h3>

              <p className="text-3xl font-bold">
                24
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              <h3 className="text-slate-400">
                Accuracy
              </h3>

              <p className="text-3xl font-bold text-green-400">
                82%
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              <h3 className="text-slate-400">
                Rank
              </h3>

              <p className="text-3xl font-bold">
                #12
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              <h3 className="text-slate-400">
                Streak
              </h3>

              <p className="text-3xl font-bold text-orange-400">
                15🔥
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;