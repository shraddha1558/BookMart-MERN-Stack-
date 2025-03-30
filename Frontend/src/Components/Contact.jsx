import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Header Section */}
        <div className=" p-10  text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Have a Question? We're Here for You! 💬
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you have a question, feedback, or an inquiry about our
            books, we’d love to hear from you! Our team is always ready to
            assist you. Drop us a message, and we'll respond as soon as
            possible. 😊
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-12 max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
            Send Us a Message 📩
          </h2>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Query, Feedback, or Inquiry"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 transition duration-300"
            >
              Submit Inquiry 🚀
            </button>
          </form>
        </div>

        {/* Other Contact Details */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            📍 Visit Our Store
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            123 Book Street, Knowledge City, India
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
            📧 Email Support
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            support@bookmart.com
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
            ☎ Call Us
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            +91 98765 43210
          </p>

          {/* Back Button */}
          <Link to="/">
            <button className="mt-8 bg-pink-500 text-white px-5 py-3 text-lg rounded-md hover:bg-pink-700 duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
