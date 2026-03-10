import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, label: "Projects Completed", value: 4 },
  { id: 2, label: "Happy Clients", value: 20 },
  { id: 3, label: "Client Rating", value: 70 },
  { id: 4, label: "Support Available", value: 15 },
];

const Statistics = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <>
      <section className="relative overflow-hidden flex flex-col items-center justify-center mt-10 md:mt-20 pt-8 pb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-3">
          Delivering Excellence
        </h1>

        <p className="px-4 md:px-2 text-gray-400 text-base sm:text-lg md:text-xl mx-auto mt-4 text-center leading-relaxed max-w-3xl">
          Key metrics that showcase our success and impact on businesses
          worldwide
        </p>
      </section>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4 md:px-15  md:py-5"
      >
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative border group rounded-[40px] text-center border-white/10 py-6 px-4 bg-[#0f1115] hover:border-[#00ffbb]/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute -top-8 -right-8 w-18 h-18 bg-[#00ffbb]/20 rounded-full transition-transform duration-500 ease-out group-hover:-translate-x-4 group-hover:translate-y-4" />
            <div className="absolute -bottom-8 -left-8 w-18 h-18 bg-[#00ffbb]/20 rounded-full transition-transform duration-500 ease-out group-hover:translate-x-4 group-hover:-translate-y-4" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl text-[#00ffbb] font-bold mb-4">
                {inView ? <CountUp start={0} end={item.value} /> : "0"}
              </h2>

              <p className="text-lg md:text-xl font-semibold text-gray-500 group-hover:text-gray-300 transition-colors">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Statistics;
