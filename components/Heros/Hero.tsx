import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  const words = [
    "Chat with friends!",
    "Create new friendships!",
    "Create private rooms!",
  ];

  useEffect(() => {
    const currentWord = words[currentIndex];
    const typeSpeed = isDeleting ? 150 : 150;
    const updateText = () => {
      setCurrentText((current) => {
        const baseText = isDeleting
          ? currentWord.slice(0, current.length - 1)
          : currentWord.slice(0, current.length + 1);
        if (!isDeleting && baseText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && baseText === "") {
          setIsDeleting(false);
          setCurrentIndex((index) => (index + 1) % words.length);
        }
        return baseText;
      });
    };

    const timer = setTimeout(updateText, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, words]);

  return (
    <div>
      {isMobile ? (
        <div>
          <div className="block max-w-full h-auto  flex items-center justify-center">
            <img src="/img/programmer-gif.gif" alt="" className=" w-[505px]" />
          </div>
          <h1 className="flex justify-center">
            Hello! Welcome to Chat Not GPT.{" "}
          </h1>
          <p className="flex justify-center">
            Below you will have the chance to:
          </p>
          <div className="flex justify-center text-orange">{currentText}</div>
        </div>
      ) : (
        <div className="mt-[100px] flex items-center justify-center">
          <div className="flex items-center justify-center gap-x-4 gap-y-4">
            <div className="md:ml-[100px] lg:ml-[-100px] ">
              <h1>Hello! Welcome to Chat Not GPT.</h1>
              <p>Below You will have a chance to:</p>
              <div className="text-orange">{currentText}</div>
            </div>
            <img
              src="/img/programmer-gif.gif"
              alt="Programmer working"
              className="w-[505px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
