import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
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
      <ContactForm />
    </div>
  );
};

export default about;
