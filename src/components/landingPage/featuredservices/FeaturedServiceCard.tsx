// import { ArrowRight } from "lucide-react";

// interface ServicesProps {
//   service: {
//     title: string;
//     category: string;
//     description: string;
//     icon: React.ElementType;
//   };
// }

// const ServiceCard: React.FC<ServicesProps> = ({ service }) => {
//       const Icon = service.icon;

//   return (
//     <div className="flex h-full group gap-5 border border-white/20 p-4 md:p-5 rounded-3xl cursor-pointer hover:border-[#00ffbb] transition-all duration-300 backdrop-blur-lg bg-white/5">
//       <span className="p-2 md:p-3 rounded-xl bg-[#00ffbb]/10 backdrop-blur-lg h-fit w-fit transition-transform duration-300 group-hover:rotate-12 flex-shrink-0">
//         <Icon
//           size={24}
//           className="text-[#00ffbb] transition-transform duration-300 group-hover:rotate-12"
//         />
//       </span>

//       <div className="flex flex-col gap-1 md:gap-2 w-full overflow-hidden">
//         <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[#00ffbb] whitespace-nowrap truncate text-left">
//           {service.title}
//         </h3>

//         <p className="text-gray-400 leading-relaxed text-left text-sm md:text-base flex-1 line-clamp-3">
//           {service.description}
//         </p>

//         <button className="flex items-center gap-2 mt-auto pt-2 text-[#00ffbb] font-semibold w-fit group/btn">
//           <span className="group-hover/btn:underline">Learn More</span>
//           <ArrowRight
//             size={18}
//             className="transition-transform duration-300 group-hover:translate-x-2"
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

import { ArrowRight } from "lucide-react";

interface ServicesProps {
  service: {
    title: string;
    category: string;
    description: string;
    icon: React.ElementType;
  };
}

const ServiceCard: React.FC<ServicesProps> = ({ service }) => {
  // সরাসরি Component হিসেবে আইকনটি ব্যবহার করা হচ্ছে
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

export default ServiceCard;