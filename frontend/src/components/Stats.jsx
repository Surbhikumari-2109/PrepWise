const Stats = () => {
  const stats = [
    "50,000+ Questions",
    "10,000+ Students",
    "95% Success Rate",
    "AI Powered",
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-8">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center"
          >
            <h3 className="text-xl font-semibold">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;