import CardTwo from "@/components/Card/CardTwo";
import Hero from "@/components/Heros/Hero";
import CardOne from "@/components/Card/CardOne";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex mt-[100px] mb-[50px]">
        <CardOne />
        <CardTwo />
      </div>
    </div>
  );
};

export default Home;
