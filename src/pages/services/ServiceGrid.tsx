import { Globe, Smartphone, Palette } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Web Development",
    category: "Web Development",
    description:
      "Custom web applications built with modern technologies for scalability and performance.",
    icon: Globe,
    iconBg: "bg-blue-300",
    tagColor: "text-blue-500",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
    tags: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    title: "Mobile App Development",
    category: "Mobile App",
    description:
      "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: Smartphone,
    iconBg: "bg-purple-300",
    tagColor: "text-purple-500",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "Native Performance",
    ],
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    title: "UI/UX Design",
    category: "UI UX Design",
    description:
      "Beautiful and intuitive user interfaces that drive engagement and conversions.",
    icon: Palette,
    iconBg: "bg-pink-500",
    tagColor: "text-pink-200",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design",
    ],
    tags: ["Figma", "Adobe XD", "Sketch", "InVision"],
  },
];

interface ServicesGridProps {
  activeTab: string;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ activeTab }) => {
  const filteredServices =
    activeTab === "All Services"
      ? services
      : services.filter((service) => service.category === activeTab);

  return (
    <section className="bg-black py-8 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
