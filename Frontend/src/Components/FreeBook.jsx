import React from "react";
import list from "../Data/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function FreeBook() {
  const filterData = list.filter((data) => data.category === "New Arrivals");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 cards by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      {/* Header */}
      <h1 className="font-bold text-2xl pb-4 text-center text-gray-900 dark:text-gray-100">
        New Arrivals
      </h1>

      {/* Slider */}
      <Slider {...settings} className="py-6">
        {filterData.map((item) => (
          <div key={item.id} className="px-3">
            <div className="hover:scale-105 transition-all duration-300">
              <Cards item={item} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FreeBook;
