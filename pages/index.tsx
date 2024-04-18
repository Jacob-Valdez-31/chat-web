import CardTwo from "@/components/Card/CardTwo";
import Cards from "@/components/Card/Cards";
import Hero from "@/components/Heros/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex mt-[100px] mb-[50px]">
        <Cards />
        <CardTwo />
      </div>
    </div>
  );
};

export default Home;
