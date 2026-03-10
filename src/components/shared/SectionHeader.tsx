import type { ReactNode } from "react";

interface SectionHeaderProps {
  badgeText?: string;
  title: ReactNode;
  subtitle: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const SectionHeader = ({
  badgeText = "Professional Solutions",
  title,
  subtitle,
  icon,
  children,
}: SectionHeaderProps) => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center py-10 px-6 overflow-hidden bg-[#0b0b0b]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00ffbb]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center z-10 animate-in fade-in slide-in-from-bottom-5 duration-1000 ease-out fill-mode-forwards">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 border border-[#00ffbb]/50 rounded-[2rem] px-6 py-2 text-[#00ffbb] backdrop-blur-xl bg-[#00ffbb]/10 transition-all hover:bg-[#00ffbb]/20">
            {icon && icon}
            <span className="text-sm font-medium tracking-wide">
              {badgeText}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-6 leading-tight">
            {title}
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-10 w-full">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
