import SectionHeader from "../../components/shared/SectionHeader";
import { Sparkles } from "lucide-react";
import Form from "./Form";
import Info from "./Info";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-black">
    
      <SectionHeader
        icon={<Sparkles size={20} />}
        badgeText="Get in Touch"
        title="Let's Start a Conversation"
        subtitle="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible"
      />

      <div className="mt-8 md:mt-16">
        <div className="container mx-auto px-4 md:px-18">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            
            <div className="w-full lg:w-1/3">
              <div className="h-full">
                <Info />
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="h-full">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
