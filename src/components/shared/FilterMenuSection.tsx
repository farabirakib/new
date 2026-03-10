import React from "react";

interface FilterProps {
  categories: string[]; 
  setActiveTab: (category: string) => void;
  activeTab: string;
}

const MenuFilterSection: React.FC<FilterProps> = ({
  categories,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="bg-[#0f1115] flex items-center justify-center">
      <div className="w-full p-5 flex flex-wrap justify-center items-center gap-3 backdrop-blur-xl border border-white/5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeTab === category
                  ? "bg-[#00ffbb] text-gray-900 shadow-[0_0_15px_rgba(0,255,187,0.4)]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuFilterSection;
