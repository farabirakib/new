import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#000d0a] flex flex-col items-center justify-center text-center p-10 w-full min-h-[400px] mt-10 md:mt-20 rounded-3xl shadow-[0_0_50px_rgba(0,255,187,0.15)] border border-[#00ffbb]/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[100%] bg-[#00ffbb]/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[90%] bg-[#05dfa5]/15 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-[#00ffbb]/5 via-transparent to-[#05dfa5]/5" />
      </div>

      <div className="relative z-10">
        <h1 className="text-white font-bold text-4xl md:text-5xl mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(0,255,187,0.3)]">
          Ready to Start Your Project?
        </h1>

        <p className="text-zinc-400 text-xl max-w-2xl font-medium">
          Let's discuss how we can help you achieve your goals with innovative
          technology solutions
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 w-full px-6 md:px-0">
          <Link
            to="/contact"
            className="w-full md:w-auto bg-[#00ffbb] text-black rounded-xl px-10 py-3.5 font-bold hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,187,0.6)] transition-all duration-300 cursor-pointer active:scale-95 whitespace-nowrap text-center block md:inline-block"
          >
           Contact Us
          </Link>

          <Link
            to="/services"
            className="w-full md:w-auto text-center border-2 border-[#00ffbb]/40 px-10 py-3.5 rounded-xl text-[#00ffbb] font-bold hover:bg-[#00ffbb]/10 hover:border-[#00ffbb] transition-all duration-300 cursor-pointer backdrop-blur-sm active:scale-95"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
