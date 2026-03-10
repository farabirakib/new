import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    category: string;
    icon: React.ElementType;
    features: string[];
    tags: string[];
    iconBg: string;
    tagColor: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <article className="group relative bg-[#111216] border border-white/5 rounded-[2rem] p-6 md:p-8 transition-all duration-500 hover:border-[#00ffbb]/30 hover:bg-[#16181d] flex flex-col h-full">
      <div className="absolute top-3 md:top-6 right-6 flex items-center gap-1 bg-[#ffaa00]/10 text-[#ffaa00] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
        <span className="w-1 h-1 bg-[#ffaa00] rounded-full animate-pulse" />
        Featured
      </div>

      <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-6">
        <div className={`p-3 rounded-2xl ${service.iconBg} bg-opacity-20`}>
          <Icon size={28} className={service.tagColor} />
        </div>
        <span
          className={`text-[10px] font-bold tracking-widest px-1 md:px-3 py-1 rounded-full bg-white/5 ${service.tagColor}`}
        >
          {service.category}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#00ffbb] transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4 md:mb-8">
        {service.description}
      </p>

      <div className="space-y-1.5 md:space-y-3 mb-4 md:mb-8 flex-grow">
        {service.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 text-gray-300 text-sm"
          >
            <CheckCircle2 size={16} className="text-[#00ffbb]" />
            {feature}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-5 md:mb-10">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-gray-400 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        type="button"
        className="w-full flex items-center justify-between bg-[#00ffbb] hover:bg-[#00e6a8] text-black px-6 py-1 md:py-2 rounded-2xl font-semibold transition-all group/btn"
      >
        <span>Learn More</span>
        <ArrowRight
          size={20}
          className="transition-transform group-hover/btn:translate-x-1"
        />
      </button>
    </article>
  );
};

export default ServiceCard;
