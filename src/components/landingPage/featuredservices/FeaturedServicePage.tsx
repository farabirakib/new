

import { Sparkles } from "lucide-react";
import ServiceGrid from "./FeaturedServiceGrid";

const ServicePage = () => {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center mt-10 md:mt-20 pt-8 pb-16 text-center bg-[#0f1115] w-full">
      
      <div className="flex justify-center w-full px-4 mb-4">
        <div className="flex items-center gap-2 border border-[#00ffbb]/50 rounded-[2rem] px-6 py-2 text-[#00ffbb] backdrop-blur-xl bg-[#00ffbb]/10 transition-all hover:bg-[#00ffbb]/20">
          <Sparkles size={20} />
          <span className="text-sm font-medium tracking-wide">
            Our Services
          </span>
        </div>
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-3 px-4">
        Comprehensive IT Solutions
      </h1>

      <p className="px-6 md:px-2 text-gray-400 text-base sm:text-lg md:text-xl mx-auto mt-4 text-center leading-relaxed max-w-3xl">
        We offer a full range of services to help your business thrive in the
        digital age
      </p>

      <div className="w-full min-h-[300px]">
        <ServiceGrid />
      </div>
    </section>
  );
};

export default ServicePage;

