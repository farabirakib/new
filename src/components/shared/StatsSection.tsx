import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix?: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="py-4 px-4 w-full">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.id}
              className="relative group p-4 border border-[#00ffbb]/20 bg-[#16181d] backdrop-blur-lg rounded-2xl text-center"
            >
              <h3 className="text-4xl md:text-3xl font-bold text-[#00ffbb] mb-2">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2.5}
                    suffix={item.suffix}
                  />
                ) : (
                  0
                )}
              </h3>

              <p className="text-gray-400 text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
