import CardTwo from "@/components/Card/CardTwo";
import Hero from "@/components/Heros/Hero";
import CardOne from "@/components/Card/CardOne";
import { useEffect, useState } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <Hero />
      <div
        className={
          isMobile
            ? "sm:flex-row mt-[100px] mb-[50px] sm:mt-[150px] w-[300px] mx-auto"
            : "flex mt-[150px] mb-[50px] justify-center gap-[100px] md:gap-8 lg:gap-[100px] "
        }
      >
        <CardOne />
        <CardTwo />
      </div>
    </div>
  );
};

export default Home;
