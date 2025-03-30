import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
function SignUp() {
  const navigate = useNavigate(); // ✅ Initialize navigate function

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ Handle form submission
  const onSubmit = (data) => {
    console.log(data); // Log submitted data
    navigate("/"); // Redirect to Home after signup
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* ✅ Improved heading for accessibility */}
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Create an Account
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-4">
          Sign up to get started
        </p>

        {/* Sign-Up Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* ✅ Fixed incorrect error message in "Name" input */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              {...register("Name", { required: "Full Name is required" })}
            />
            {errors.Name && (
              <p className="text-red-500 text-sm">{errors.Name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              {...register("Email", { required: "Email is required" })}
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">{errors.Email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Create Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              {...register("Password", { required: "Password is required" })}
            />
            {errors.Password && (
              <p className="text-red-500 text-sm">{errors.Password.message}</p>
            )}
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Sign Up
          </button>

          {/* ✅ Removed modal function call from Link (caused issues) */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
            Already registered?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:underline font-medium"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Login
            </Link>
          </p>

          {/* Close Button - Redirect to Home */}
          <div className="flex justify-center">
            <button
              type="button" // ✅ Added `type="button"` to prevent unintended form submission
              onClick={() => navigate("/")} // Redirect to Home page
              className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
