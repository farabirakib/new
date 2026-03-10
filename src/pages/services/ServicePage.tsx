import { useState } from "react";
import { Sparkles } from "lucide-react";
import ServicesFilterSection from "../../components/shared/FilterMenuSection";
import SectionHeader from "../../components/shared/SectionHeader";
import StatsSection from "../../components/shared/StatsSection";
import ServicesGrid from "./ServiceGrid";

const servicesStats = [
  { id: 1, label: "Services Offered", value: 3 },
  { id: 2, label: "Expert Team", value: 5, suffix: "+" },
  { id: 3, label: "Projects Delivered", value: 10, suffix: "+" },
  { id: 4, label: "Client Satisfaction", value: 70, suffix: "%" },
];

const serviceCategories = [
  "All Services",
  "Mobile App",
  "Web Development",
  "UI UX Design",
];

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("All Services");

  return (
    <>
      <SectionHeader
        icon={<Sparkles size={20} />}
        badgeText="Professional Solutions"
        title="Services That Drive Success"
        subtitle="From concept to deployment, we deliver cutting-edge digital solutions tailored to elevate your business to new heights"
      >
        <StatsSection stats={servicesStats} />
      </SectionHeader>
      <ServicesFilterSection
        categories={serviceCategories}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ServicesGrid activeTab={activeTab} />
    </>
  );
};

export default ServicesPage;
