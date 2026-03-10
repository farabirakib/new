import ServicePage from "../../components/landingPage/featuredservices/FeaturedServicePage";
import StatisticsPage from "../../components/landingPage/statistics-section/StatisticsPage";
import BannerSection from "../../components/shared/BannerSection";
import HeroSection from "../../components/shared/HeroSection";
import TrustedCompanies from "../../components/shared/TrustedBySection";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {" "}
    
      <div data-aos="fade-up">
        <HeroSection />
      </div>
     
      <div data-aos="fade-up" data-aos-delay="100">
        <ServicePage />
      </div>
     
      <div data-aos="fade-up" data-aos-delay="200">
        <TrustedCompanies />
      </div>
    
      <div data-aos="fade-up" data-aos-delay="300">
        <StatisticsPage />
      </div>
      
      <div data-aos="fade-up" data-aos-delay="400">
        <BannerSection />
      </div>
    </div>
  );
};

export default HomePage;