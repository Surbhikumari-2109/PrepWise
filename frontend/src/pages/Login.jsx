import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const data = await loginUser({
          email: formData.email,
          password: formData.password,
        });
        console.log("LOGIN DATA:", data);

        localStorage.setItem("token", data.token);

        localStorage.setItem("role", data.user.role);

        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Login Successful ✅");
        console.log("USER SAVED:", localStorage.getItem("user"));
        console.log("ROLE SAVED:", localStorage.getItem("role"));

        toast.success("Login Successful ✅");

        if (data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);

        toast.error(error.response?.data?.message || "Login failed");
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center px-4">
      <div className="absolute top-8 left-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition"
        >
          <FaArrowLeft />
          Home
        </Link>
      </div>
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back 👋
        </h1>

        <p className="text-slate-400 text-center mt-2">
          Login to your PrepWise account
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {/* Email */}
          <div>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-slate-400" />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white focus:border-violet-500 outline-none"
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-slate-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-12 py-3 text-white focus:border-violet-500 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-slate-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-xl text-white font-medium transition"
          >
            Login
          </button>

          <p className="text-center text-slate-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-violet-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
