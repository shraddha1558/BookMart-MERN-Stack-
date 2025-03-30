import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ Define onSubmit function
  const onSubmit = (data) => {
    console.log(data); // You can handle login logic here
    navigate("/"); // Redirect to Home after login
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transition-all">
        {/* Modal Title */}
        <h3 className="font-bold text-2xl text-gray-800 dark:text-white text-center">
          Welcome Back!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-center">
          Sign in to continue
        </p>

        {/* Login Form */}
        <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              {...register("Email", { required: "Email is required" })}
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">{errors.Email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              {...register("Password", { required: "Password is required" })}
            />
            {errors.Password && (
              <p className="text-red-500 text-sm">{errors.Password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Login
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
            Not registered?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:underline font-medium"
              onClick={() => document.getElementById("my_modal_5").close()} // Close modal before navigating
            >
              Create an account
            </Link>
          </p>

          {/* Close Button */}
          <div className="modal-action flex justify-center">
            <button
              onClick={() => {
                document.getElementById("my_modal_5").close(); // Close modal
                navigate("/"); // Redirect to Home
              }}
              className="btn bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
