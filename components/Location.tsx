import React from "react";

const Locations = () => {
  return (
    <div className="bg-white py-6">
      <div className="py-6"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8">
        <div className="lg:m-auto lg:pl-[100px]">
          <h1 className="text-2xl font-bold text-red-500">
            Where I'm From: Conway, AR
          </h1>
          <p>
            Note: technically I live in Vilonia, Arkansas just 2 miles away from
            Conway but most people know Conway so I just say Conway. :^)
          </p>
        </div>
        <div className="lg:h-[390px] lg:w-[390px]  lg:m-auto">
          <img
            src="/img/conway.webp"
            alt="Jacob Valdez"
            className="w-full h-auto  "
          />
        </div>
      </div>
    </div>
  );
};

export default Locations;
