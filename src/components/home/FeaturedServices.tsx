import { ArrowRight, Globe, Smartphone, Palette, Sparkles } from "lucide-react";

const services = [
  {
    title: "Web Development",
    category: "Web Development",
    description: "Custom web applications built with modern technologies.",
    icon: Globe,
  },
  {
    title: "Mobile App",
    category: "Mobile App",
    description: "High-performance mobile apps for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    category: "UI/UX Design",
    description: "User-centric designs that convert and engage.",
    icon: Palette,
  },
];

interface ServiceCardProps {
  service: {
    title: string;
    category: string;
    description: string;
    icon: React.ElementType;
  };
}

const FeaturedServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="flex h-full group gap-5 border border-white/20 p-4 md:p-5 rounded-3xl cursor-pointer hover:border-[#00ffbb] transition-all duration-300 backdrop-blur-lg bg-white/5 will-change-transform transform-gpu">
      <span className="p-2 md:p-3 rounded-xl bg-[#00ffbb]/10 backdrop-blur-lg h-fit w-fit transition-transform duration-300 group-hover:rotate-12 flex-shrink-0">
        <Icon
          size={24}
          className="text-[#00ffbb] transition-transform duration-300 group-hover:rotate-12"
        />
      </span>

      <div className="flex flex-col gap-1 md:gap-2 w-full overflow-hidden">
        <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[#00ffbb] whitespace-nowrap truncate text-left">
          {service.title}
        </h3>

        <p className="text-gray-400 leading-relaxed text-left text-sm md:text-base flex-1 line-clamp-3">
          {service.description}
        </p>

        <button className="flex items-center gap-2 mt-auto pt-2 text-[#00ffbb] font-semibold w-fit group/btn">
          <span className="group-hover/btn:underline">Learn More</span>
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </button>
      </div>
    </div>
  );
};

const FeaturedServices = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4 md:px-10 items-stretch w-full max-w-7xl mx-auto">
          {services.map((item, index) => (
            <FeaturedServiceCard key={index} service={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
