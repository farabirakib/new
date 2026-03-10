import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/navigation";
import { PrimaryButton } from "../ui/Button";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <nav aria-label="Primary">
      <div className="lg:hidden flex items-center ">
        <button
          onClick={() => setOpen(!isOpen)}
          className="text-white p-2 z-[110] relative focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X size={30} className="text-[#00ffbb]" />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      <ul className="hidden lg:flex items-center gap-10">
        {navLinks.map((item) => (
          <li key={item.name} className="group relative">
            <NavLink
              to={item.link}
              className={({ isActive }) => `
                    text-[15px] tracking-wider text-sm transition duration-300 font-semibold 
                    ${isActive ? "text-[#00ffbb]" : "text-white hover:text-[#00ffbb]"}
                    `}
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#00ffbb] transition-all duration-300
                                ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                            `}
                  ></span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        id="mobile-navigation"
        className={`fixed top-0 right-0 h-screen w-[280px] bg-[#0a0a0a] border-l border-white/10 p-8 z-[100] 
                transform transition-transform duration-500 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!isOpen}
      >
        <ul className="flex flex-col space-y-6 mt-16">
          {navLinks.map((item) => (
            <li key={item.name} onClick={() => setOpen(false)}>
              <NavLink
                to={item.link}
                className={({ isActive }) => `
                                    text-xl font-semibold block transition-all transform 
                                    ${isActive ? "text-[#00ffbb] translate-x-2" : "text-white"}
                                `}
              >
                {item.name}
              </NavLink>
              <div className="w-full h-[1px] bg-white/5 mt-2"></div>
            </li>
          ))}
        </ul>
        <div className="mt-10" onClick={() => setOpen(false)}>
          <PrimaryButton label="Start Project" to="/services" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
