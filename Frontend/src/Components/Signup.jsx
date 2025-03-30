import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function SignUp() {
  const navigate = useNavigate(); // Initialize navigate function
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Create an Account
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-4">
          Sign up to get started
        </p>

        {/* Sign-Up Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              {...register("Name", { required: "Password is required" })}
            />
          </div>

          {/* Email */}
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
          </div>

          {/* Password */}
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
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Sign Up
          </button>

          {/* Already have an account? - Close Modal Before Navigating */}
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
          <div className="modal-action flex justify-center">
            <button
              onClick={() => navigate("/")} // Redirect to Home page
              className="btn bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600"
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
