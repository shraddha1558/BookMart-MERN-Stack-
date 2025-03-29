import React, { Component } from "react";
import banner from "../../public/banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        {/* Div Containers */}

        {/* Left PArt of banner */}
        <div className="order-2 md:order-1 w-full md:w-1/2 flex-col gap-2 p-2">
          {" "}
          Left
          <div className="space-y-12">
            <h1 className="text-4xl font-bold ">
              Hello, Welcome to my Book store you can buy anything you want.
              Happy to host you all. Please visit all the book courses.
              <span className="text-pink-500"> Update Yourself Daily!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              alias ullam rem mollitia, sit nobis consequatur corrupti eaque
              minima aliquam illum dolores exercitationem sunt est. Nisi
              laudantium minus eos aspernatur.
            </p>
            {/* email in left part  */}
            <div className="join">
              <div>
                <label className="input validator join-item">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input type="email" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
              <button className="btn btn-neutral join-item">Join</button>
            </div>
          </div>
          {/* button */}
          <div className=" space-y-10 my-8">
            <button className=" p-2 space-y-10 gap-2 btn btn-soft btn-secondary">
              Secondary
            </button>
          </div>
        </div>

        {/* right part of banner */}
        <div className=" order-1 w-full md:w-1/2">
          Right
          <img
            src={banner}
            alt=""
            className="mix-blend-multiply w-full md:w-full md:h-100 h-50 object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
