const Stats = () => {
  const stats = [
    "🤖 AI-Powered Feedback",
    "📚 Multiple Subjects",
    "📈 Performance Tracking",
    "🏆 Competitive Leaderboard",
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-violet-500 transition"
          >
            <h3 className="text-sm md:text-lg font-semibold">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;