import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    navigate("/");
  };

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-6 border-b border-slate-800 gap-4">
      
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-bold text-violet-400">
        PrepWise
      </h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 text-slate-300">
        <a href="#home" className="hover:text-white transition">
          Home
        </a>

        <a href="#about" className="hover:text-white transition">
          About
        </a>

        <a href="#footer" className="hover:text-white transition">
          Contact
        </a>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {token ? (
          <>
            <button
              onClick={() =>
                navigate(
                  role === "admin"
                    ? "/admin"
                    : "/dashboard"
                )
              }
              className="px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-xl text-sm md:text-base transition"
            >
              Dashboard
            </button>

            <button
              onClick={logoutHandler}
              className="px-4 py-2 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 rounded-xl text-sm md:text-base transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="px-4 py-2 border border-slate-700 hover:border-violet-500 rounded-xl text-sm md:text-base transition">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-xl text-sm md:text-base transition">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;