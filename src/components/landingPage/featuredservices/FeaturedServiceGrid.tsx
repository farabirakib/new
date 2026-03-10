
import { Globe, Smartphone, Palette } from "lucide-react";
import ServiceCard from "./FeaturedServiceCard";

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

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4 md:px-10 items-stretch w-full max-w-7xl mx-auto">
      {services.map((item, index) => (
        <ServiceCard key={index} service={item} />
      ))}
    </div>
  );
};

export default ServiceGrid;
