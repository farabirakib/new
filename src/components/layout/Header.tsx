import { Link } from "react-router-dom";
import { PrimaryButton } from "../ui/Button";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md md:px-14 border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between ">
        {/* --- LOGO SECTION --- */}
        <Link
          to="/"
          className="flex flex-col items-start leading-none group cursor-pointer no-underline"
        >
          <div className="flex items-center">
            <span className="text-3xl font-bold text-white tracking-tighter">
              M
            </span>

            <div className="relative flex items-center justify-center">
              <div className="absolute w-8 h-8 bg-[#00ffbb] rounded-full translate-x-[1px]" />
              <span className="relative text-3xl font-bold text-black tracking-tighter">
                o
              </span>
            </div>

            <span className="text-3xl font-bold text-white tracking-tighter">
              oni
            </span>
          </div>

          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-0.5 ml-1 font-medium">
            web agency
          </span>
        </Link>

        {/* --- NAVIGATION SECTION --- */}
        <Navbar />

        {/* --- BUTTON SECTION --- */}
        <div className="hidden items-center  lg:block">
          <PrimaryButton className="" label="Start Project" to="/services" />
        </div>
      </div>
    </header>
  );
};

export default Header;
