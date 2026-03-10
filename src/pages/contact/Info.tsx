import { Mail, Phone, MapPin } from "lucide-react";

const Info = () => {
  return (
    <div className="max-w-lg">
      <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
      <p className="text-gray-400 mb-8">
        Whether you have a question about our services, pricing, or anything
        else, our team is ready to answer all your questions.
      </p>

      <div className="flex flex-col gap-4 border border-[#00ffbb]/50 rounded-[2rem] border- p-6 hover:border-[#00ffbb] bg-[#0f1115]">
        <h2 className="text-xl text-white font-semibold md:mb-2">
          Get In Touch
        </h2>

        <div className="flex items-center gap-3">
          <div className="bg-[#00ffbb] p-1 md:p-2 rounded-full">
            <Mail size={20} className="text-black" />
          </div>
          <a
            href="mailto:hello@example.com"
            className="text-lg font-medium hover:text-[#00cc95] transition-colors duration-200 text-gray-400"
          >
            hello@example.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#00ffbb] p-1 md:p-2 rounded-full">
            <Phone size={20} className="text-black" />
          </div>
          <a
            href="tel:+8801234567890"
            className="text-lg font-medium hover:text-[#00cc95] transition-colors duration-200 text-gray-400"
          >
            +880 1234 567890
          </a>
        </div>
      </div>

      <div className="flex mt-4 flex-col gap-2 md:gap-4 border border-[#00ffbb]/50 rounded-[2rem] p-4 md:p-6 hover:border-[#00ffbb] border-[#00ffbb] bg-[#0f1115] ">
        <div className="bg-[#00ffbb] p-2 rounded-full w-fit">
          <MapPin size={20} className="text-black" />
        </div>

        <h2 className="font-semibold text-white text-xl md:mb-2">Location</h2>
        <p className="text-gray-400">
          House 128, Road 19, uttara-1, Dhaka 1212, Bangladesh.
        </p>
      </div>
    </div>
  );
};

export default Info;
