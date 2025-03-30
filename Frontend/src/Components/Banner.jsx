import React from "react";
import banner from "../../public/banner.png";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center gap-8">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold leading-snug">
          Welcome to My Bookstore! 📚
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Explore a wide range of books across different genres. Stay updated
          and enrich your knowledge every day!
        </p>

        {/* Email Subscription Form */}
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white flex-1"
            required
          />
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={banner}
          alt="Bookstore Banner"
          className="w-full max-w-md md:max-w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
