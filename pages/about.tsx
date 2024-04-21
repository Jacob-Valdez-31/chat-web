import About from "@/components/About";
import AboutHero from "@/components/Heros/AboutHero";
import Locations from "@/components/Location";
import Resume from "@/components/Resume";

const about = () => {
  return (
    <div>
      <AboutHero />
      <Locations />
      <About />
      <Resume />
    </div>
  );
};

export default about;
