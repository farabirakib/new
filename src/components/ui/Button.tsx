import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PrimaryButtonProps {
  label?: string;
  to?: string;
  className?: string;
}

export const PrimaryButton = ({
  label = "Start Project",
  to = "/services",
  className = "",
}: PrimaryButtonProps) => {
  return (
    <div className={className}>
      <Link
        to={to}
        className="flex items-center border-2 border-[#00ffbb]/30 space-x-2 group hover:bg-[#00ffbb] hover:border-[#00ffbb]
        transition-all duration-300 rounded-full px-4 py-2 lg:px-8 lg:py-3.5 w-fit"
      >
        <span className="text-sm font-bold group-hover:text-black transition-colors">
          {label}
        </span>
        <div className="bg-white rounded-full p-1 flex items-center justify-center transition-transform group-hover:translate-x-1">
          <ArrowRight className="w-3 h-3 text-black" />
        </div>
      </Link>
    </div>
  );
};
