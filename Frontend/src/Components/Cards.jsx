import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="relative card w-92 h-full bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-gray-800 dark:text-white dark:border rounded-lg flex flex-col">
          {/* Category Badge - Moved to Top-Right */}
          <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-3 py-1 rounded-md shadow-md">
            {item.category}
          </div>

          {/* Book Image */}
          <figure>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </figure>

          {/* Card Content */}
          <div className="card-body flex flex-col flex-grow p-4">
            {/* Book Name */}
            <h2 className="card-title text-lg font-semibold">{item.name}</h2>

            {/* Book Description */}
            <p className="flex-grow text-sm text-gray-700 dark:text-gray-300 break-words leading-tight">
              {item.title}
            </p>

            {/* Rating & Reviews - Centered with Larger Stars & Review Count */}
            <div className="flex flex-col items-center my-2">
              <div className="flex space-x-1 text-yellow-500 text-xl">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>{i < item.rating ? "★" : "☆"}</span>
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400 text-base mt-1 font-medium">
                ({item.reviews} reviews)
              </span>
            </div>

            {/* Price & Buy Button - Centered */}
            <div className="card-actions flex flex-col items-center mt-3">
              <div className="badge badge-outline text-lg font-bold px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md">
                ${item.price}
              </div>
              <button className="mt-3 px-4 py-2 w-full text-center rounded-lg border-2 hover:bg-pink-500 hover:text-white transition duration-200 dark:hover:bg-pink-400">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
