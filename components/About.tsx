import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8 ">
          <div className="lg:h-[390px] lg:w-[290px] lg:m-auto ">
            <img
              src="/img/jacob_hannah.webp"
              alt="Jacob Valdez"
              className="w-full h-full "
            />
          </div>
          <div className="m-auto ">
            <h1 className="text-2xl font-bold ">About Me</h1>
            <p>
              Good to see you've made it this far! My name is Jacob Valdez and
              next to me is my beautiful wife Hannah. We recently just got
              married and as I said earlier live out in Conway, Arkansas (well
              kinda lol). Hannah just finished getting her degree in education
              to be a school teacher and will be graduating from UCA in may of
              2024.
            </p>

            <p>
              As for myself I am originally from Texas. I went to Texas A&M
              where I graduated with a degree in Sport Management. Funny to
              think that I now consider my self a software developer but doesn't
              everyone do something else then what there degree is in??? Its
              crazy to think how life itself will take us on unexpected paths.
              Nonetheless I am grateful for this live I get to live with my
              beautiful wife by my side.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
