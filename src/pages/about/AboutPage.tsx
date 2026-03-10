import { Link } from "react-router-dom";
import { Monitor, Code, Rocket, CheckCircle2 } from "lucide-react";
import SectionHeader from "../../components/shared/SectionHeader";
import StatsSection from "../../components/shared/StatsSection";

const AboutPage = () => {
  // Expertise Data
  const services = [
    {
      icon: <Monitor size={32} />,
      title: "UI/UX Strategy",
      desc: "Intuitive designs that drive user engagement.",
    },
    {
      icon: <Code size={32} />,
      title: "Web Architecture",
      desc: "Scalable apps using Next.js & React.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Digital Growth",
      desc: "Optimizing your digital market presence.",
    },
  ];

  // Advantage Data
  const points = [
    "Customized Solutions for Scale",
    "Agile Development Cycle",
    "Dedicated Support Team",
    "Security-First Approach",
  ];

  const aboutStats = [
    { id: 1, label: "Services Offered", value: 3 },
    { id: 2, label: "Expert Team", value: 5, suffix: "+" },
    { id: 3, label: "Projects Delivered", value: 10, suffix: "+" },
    { id: 4, label: "Client Satisfaction", value: 70, suffix: "%" },
  ];


  return (
    <main className="bg-[#0b0b0b] min-h-screen">
      {/* ১. Hero Section */}
      <SectionHeader
        badgeText="Since 2021"
        title={
          <>
            We Design. We <span className="text-[#00ffbb]">Empower.</span>
          </>
        }
        subtitle="Mooni is a digital agency dedicated to helping businesses scale through cutting-edge IT solutions."
      >
        {/* Stats now live inside the header's container */}
        <StatsSection stats={aboutStats} />
      </SectionHeader>

      {/* ২. Expertise Cards Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 border border-gray-800 rounded-3xl bg-[#141414] hover:border-[#00ffbb]/40 transition-all duration-300 ease-in-out transform hover:-translate-y-3 cursor-default"
            >
              <div className="text-[#00ffbb] mb-6 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ৩. Why Choose Us (AboutAdvantage) Section */}
      <section className="py-10 md:py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
              Why Leaders <br /> Choose Our{" "}
              <span className="text-[#00ffbb]">Expertise</span>
            </h2>

            <div className="space-y-4">
              {points.map((text, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <CheckCircle2
                    className="text-[#00ffbb] transition-transform group-hover:scale-110"
                    size={20}
                  />
                  <span className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative flex justify-center group">
            <div className="absolute -inset-1 bg-[#00ffbb]/20 blur-2xl rounded-full opacity-50" />
            <div className="relative bg-[#141414] py-10 px-10 rounded-[2rem] border border-gray-800/50 max-w-md">
              <h4 className="text-[#00ffbb] font-bold text-6xl md:text-7xl mb-4 tracking-tighter">
                98%
              </h4>
              <h3 className="text-2xl font-bold text-white mb-3">
                Client Satisfaction
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Our commitment to excellence ensures that every project we touch
                becomes a success story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ৪. Call to Action (AboutCTA) Section */}
      <section className="py-12 md:py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto border border-gray-800 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-[#141414] to-black hover:border-[#00ffbb]/20 transition-all duration-500">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Ready to evolve?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-[#00ffbb] text-black px-10 py-4 rounded-full font-bold hover:shadow-[0_0_30px_#00ffbb] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Let's Talk Project
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;