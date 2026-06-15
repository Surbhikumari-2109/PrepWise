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
    <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
      <h1 className="text-3xl font-bold text-violet-400">
        PrepWise
      </h1>

      <div className="hidden md:flex items-center gap-8 text-slate-300">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#footer">Contact</a>
      </div>

      <div className="flex gap-4">
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
              className="px-5 py-2 bg-violet-600 rounded-xl hover:bg-violet-700"
            >
              Dashboard
            </button>

            <button
              onClick={logoutHandler}
              className="px-5 py-2 bg-red-500 rounded-xl hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="px-5 py-2 border border-slate-700 rounded-xl hover:border-violet-500">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="px-5 py-2 bg-violet-600 rounded-xl hover:bg-violet-700">
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