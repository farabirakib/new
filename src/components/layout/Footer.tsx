import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks, socialLinks } from "../../data/navigation";

const FooterBranding = () => {
  return (
    <div className="lg:col-span-5 space-y-8">
      <div className="flex items-center gap-1">
        <span className="text-4xl font-bold tracking-tight text-white">
          Mooni
        </span>
        <div className="w-6 h-6 rounded-full bg-[#00f5c4] mt-1 ml-1 shadow-[0_0_15px_rgba(0,245,196,0.3)]" />
        <div className="ml-2 text-[10px] text-gray-500 uppercase tracking-widest leading-none mt-2">
          web agency
        </div>
      </div>

      <h2 className="text-2xl font-bold leading-tight max-w-xs text-white">
        Crafting high performance websites & digital products
      </h2>

      <div className="pt-6 border-t border-zinc-800/50 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <h3 className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">
              Contact Us
            </h3>
            <a
              href="tel:+8801806304023"
              className="text-gray-200 hover:text-[#00f5c4] transition-colors block font-medium"
            >
              +880 1806304023
            </a>
          </div>
          <div>
            <h3 className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">
              Email
            </h3>
            <a
              href="mailto:moonibd90@gmail.com"
              className="text-gray-200 hover:text-[#00f5c4] transition-colors block font-medium"
            >
              moonibd90@gmail.com
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">
            Office
          </h3>
          <address className="text-gray-400 leading-relaxed text-sm not-italic">
            18 Sector, 22 No road,
            <br />
            Uttara, Dhaka, Bangladesh
          </address>
        </div>
      </div>
    </div>
  );
};

const FooterLinks = () => {
  return (
    <div className="lg:col-span-3 lg:pl-8">
      <h2 className="text-xl font-bold mb-8 relative inline-block text-white">
        Quick Links
        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#00f5c4]"></span>
      </h2>
      <ul className="space-y-4">
        {navLinks.map((item) => (
          <li key={item.name}>
            <Link
              to={item.link}
              className="flex group items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowRightCircle
                size={18}
                className="mr-2 text-[#00f5c4] transition-transform duration-300 group-hover:translate-x-1"
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterSocials = () => {
  return (
    <div className="space-y-4 mt-8">
      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
        Socials
      </h3>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map(({ id, name, href, icon: Icon }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="group relative flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 transition-all hover:border-[#00f5c4]/50 hover:bg-zinc-800"
          >
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-zinc-800 text-white text-[10px] px-2 py-1 rounded pointer-events-none">
              {name}
            </span>
            <Icon
              size={18}
              className="text-zinc-400 group-hover:text-[#00f5c4] transition-colors"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

const FooterNewsletter = () => {
  return (
    <div className="lg:col-span-4 space-y-6">
      <h2 className="text-xl font-bold text-white leading-snug">
        Subscribe to our newsletter
        <br />
        for the latest updates
      </h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        aria-label="Newsletter signup"
        className="flex flex-col sm:flex-row gap-0 bg-[#1a1a1a] rounded-2xl p-2 items-center border border-zinc-800 focus-within:border-[#00f5c4]/50 transition-all w-full sm:max-w-fit"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="Enter your email address"
          className="bg-transparent border-none outline-none text-gray-300 px-4 py-3 w-full sm:max-w-[250px] text-sm"
        />
        <button
          type="submit"
          className="bg-[#00f5c4] text-black font-bold px-6 py-2.5 rounded-xl hover:scale-105 active:scale-95 transition-all w-full sm:w-auto mt-2 sm:mt-0 shadow-[0_4px_15px_rgba(0,245,196,0.3)] text-sm"
        >
          Subscribe
        </button>
      </form>
      <FooterSocials />
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-md  border-zinc-800 mt-10 md:mt-20 md:py-10 py-5 px-2 md:px-10 ">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <FooterBranding />
          <FooterLinks />
          <FooterNewsletter />
        </div>

        <div className="w-full border-t border-zinc-800/50 py-6 mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm font-medium">
            &copy; {currentYear} <span className="text-[#00f5c4]">Mooni</span>.
            All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-zinc-600">
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
