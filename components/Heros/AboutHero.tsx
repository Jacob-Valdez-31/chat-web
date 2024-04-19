import React, { useEffect, useState } from "react";

const AboutHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="min-w-full">
          <img
            src="/img/about6.0.jpeg"
            alt=""
            className="min-w-full h-[auto]"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center gap-x-4 gap-y-4"></div>
          <img
            src="/img/about6.0.jpeg"
            alt=""
            className="min-w-full h-[500px]"
          />
        </div>
      )}
    </div>
  );
};

export default AboutHero;
