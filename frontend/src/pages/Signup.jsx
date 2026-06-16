import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
    

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  // Full Name Validation
  if (!formData.fullName.trim()) {
    newErrors.fullName = "Full Name is required";
  }

  // Email Validation
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email =
        "Please enter a valid email address";
    }
  }

  // Password Validation
  if (!formData.password.trim()) {
    newErrors.password = "Password is required";
  } else {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters and contain one uppercase letter and one number";
    }
  }

  // Confirm Password Validation
  if (!formData.confirmPassword.trim()) {
    newErrors.confirmPassword =
      "Confirm Password is required";
  }

  // Password Match Validation
  if (
    formData.password &&
    formData.confirmPassword &&
    formData.password !== formData.confirmPassword
  ) {
    newErrors.confirmPassword =
      "Passwords do not match";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    try {
      const data = await registerUser({
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      console.log("Signup Success", data);
          toast.success("Account Created Successfully ");

      navigate("/login");
    } catch (error) {
      console.log(error);

       toast.error(
    error.response?.data?.message || "Signup failed"
  );
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
          Create Account 🚀
        </h1>

        <p className="text-slate-400 text-center mt-2">
          Join PrepWise today
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >
          {/* Full Name */}
          <div>
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-slate-400" />

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white focus:border-violet-500 outline-none"
              />
            </div>

            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName}
              </p>
            )}
          </div>

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
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-slate-400" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-12 py-3 text-white focus:border-violet-500 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-4 text-slate-400"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>

            <p className="text-xs text-slate-400 mt-2">
              Password should contain:
            </p>

            <ul className="text-xs text-slate-500 ml-4 mt-1 list-disc">
              <li>Minimum 8 characters</li>
              <li>One uppercase letter</li>
              <li>One number</li>
            </ul>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-slate-400" />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-12 py-3 text-white focus:border-violet-500 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-4 top-4 text-slate-400"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-xl text-white font-medium transition"
          >
            Create Account
          </button>

          <p className="text-center text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-violet-400 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;