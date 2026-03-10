import React from "react";
import { ArrowRight } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  color?: string;
}

interface Portfolio {
  title: string;
  category: string;
  client: string;
  description: string;
  image: string;
  featured?: boolean;
  tags: string[];
  extraTags?: number;
  stats: Stat[];
}

interface PortfolioCardProps {
  project: Portfolio;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-[#121212] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-42 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60" />

        {project.featured && (
          <span className="absolute top-4 right-4 bg-orange-500 text-black text-[10px] font-bold px-2 py-1 rounded-xl tracking-wider">
            Featured
          </span>
        )}
      </div>

      <div className="p-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ffbb] transition-colors">
          {project.title}
        </h3>

        <div className="text-sm mb-4">
          <p className="text-gray-500 font-semibold mb-1">
            Client:{" "}
            <span className="text-gray-400 font-normal">{project.client}</span>
          </p>

          <p className="text-gray-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-gray-800/50 text-gray-300 text-[10px] px-2 py-1 rounded-xl border border-gray-700"
            >
              {tag}
            </span>
          ))}
          {project.extraTags && (
            <span className="text-gray-500 text-[11px] mt-1">
              +{project.extraTags}
            </span>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 py-2 border-t border-gray-800 mb-3">
          {project.stats.map((stat: Stat, index: number) => (
            <div key={index} className="text-center">
              <div className={`text-[15px] font-bold text-[#00ffbb]`}>
                {stat.value}
              </div>
              <div className="text-[12px] text-gray-400 font-bold leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-[#00ffbb]/80 hover:bg-[#00ffbb] text-black font-semibold py-1 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 group/btn">
          View Details
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
