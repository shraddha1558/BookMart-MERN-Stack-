import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
// import list from "../Data/list.json";
import axios from "axios";

function Books() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Header Section */}
        <div className="mt-28 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Discover Your Next Great Read! 📚
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Browse through a carefully selected collection of books across
            various genres. Whether you love fiction, self-help, or academic
            reads, we have something for you. Find your perfect book and get
            lost in the world of stories and knowledge.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-5 py-3 text-lg rounded-md hover:bg-pink-700 duration-300">
              Back to Home
            </button>
          </Link>
        </div>

        {/* Grid Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;
