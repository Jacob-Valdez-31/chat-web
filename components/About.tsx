import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8 ">
          <div>
            <img
              src="/img/jacob_hannah.webp"
              alt="Jacob Valdez"
              className="w-full h-auto "
            />
          </div>
          <div className=" ">
            <h1 className="text-2xl font-bold " id="1">
              About Me
            </h1>
            <p>
              Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te
              usu virtute placerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te
              usu virtute placerat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
