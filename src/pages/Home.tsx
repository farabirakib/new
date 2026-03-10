import FeaturedServices from "../components/home/FeaturedServices";
import Statistics from "../components/home/Statistics";
import Banner from "../components/home/Banner";
import Hero from "../components/home/Hero";
import TrustedBy from "../components/home/TrustedBy";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div data-aos="fade-up">
        <Hero />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <FeaturedServices />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <TrustedBy />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <Statistics />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
