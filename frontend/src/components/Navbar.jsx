const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
      <h1 className="text-3xl font-bold text-violet-400">
        PrepWise
      </h1>

      <div className="hidden md:flex items-center gap-8 text-slate-300">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Subjects</a>
        <a href="#">Leaderboard</a>
      </div>

      <div className="flex gap-4">
        <button className="px-5 py-2 border border-slate-700 rounded-xl hover:border-violet-500">
          Login
        </button>

        <button className="px-5 py-2 bg-violet-600 rounded-xl hover:bg-violet-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;