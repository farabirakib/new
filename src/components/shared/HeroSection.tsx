import { ArrowRight, FileText, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-[#0b0d17] text-white flex items-center px-6 lg:px-20 py-5 md:py-22 min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[50%] bg-[#00ffbb]/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[40%] bg-[#00ffbb]/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#00ffbb]/5 to-transparent"></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-5 animate-in fade-in slide-in-from-left duration-1000">
          <div className="flex sm:inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#00ffbb]/50 rounded-[2rem] text-[#00ffbb] backdrop-blur-xl bg-[#00ffbb]/10 transition-all hover:bg-[#00ffbb]/20 text-sm font-medium mx-auto sm:mx-0 w-fit">
            <Zap size={16} fill="currentColor" />
            <span>Professional IT Services</span>
          </div>

          <h1 className="text-3xl lg:text-6xl font-bold leading-tight tracking-tight">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-[#00ffbb] via-[#00ffbb]/80 to-[#00ffbb]/40 bg-clip-text text-transparent">
              Ideas Into Reality
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            We build innovative digital solutions that drive business growth.
            From web applications to mobile apps, we bring your vision to life.
          </p>

          <div className="flex justify-center md:justify-start flex-wrap gap-4">
            <Link
              to="/contact"
              className="flex items-center cursor-pointer group gap-2 bg-[#00ffbb] hover:bg-[#00ffbb]/80 text-black px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,255,187,0.3)] hover:shadow-[0_0_30px_rgba(0,255,187,0.5)]"
            >
              Stat Your Project
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/services"
              className="flex items-center cursor-pointer gap-2 bg-transparent border border-gray-700 hover:border-[#00ffbb] text-white px-6 py-3 rounded-xl font-bold transition-all hover:text-[#00ffbb] backdrop-blur-sm"
            >
              View Services <FileText size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
            <div>
              <h3 className="text-2xl font-bold">50+</h3>
              <p className="text-gray-500 text-sm">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">100%</h3>
              <p className="text-gray-500 text-sm">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">10+</h3>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
          <div className="relative w-full max-w-[500px]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
              alt="A collaborative team working around a desk"
              className="relative z-10 rounded-3xl md:rounded-full aspect-square object-cover shadow-2xl border border-white/10"
            />
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#00ffbb]/20 blur-[100px] rounded-full animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#00ffbb]/10 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
