import { Sparkles } from "lucide-react";
import SectionHeader from "../../components/shared/SectionHeader";
import StatsSection from "../../components/shared/StatsSection";
import ProjectFilterSection from "../../components/shared/FilterMenuSection";
import { useState } from "react";
import PortfolioGrid from "./PortfolioGrid";


const projectStats = [
  { id: 1, label: "Project Complete", value: 4, suffix: "" },
  { id: 2, label: "Happy Clients", value: 50, suffix: "+" },
  { id: 3, label: "Success Rate", value: 80, suffix: "%" },
  { id: 4, label: "Years Experience", value: 4, suffix: "+" },
];

const projectCategories = [
  "All Projects",
  "Ecommerce",
  "Mobile App",
  "Saas",
  "Web Development",
];



const PortfolioPage = () => {
    const [activeTab, setActiveTab] = useState("All Projects");
  return (
    <>
      <SectionHeader
        icon={<Sparkles size={20} />}
        badgeText="Our Work"
        title="Portfolio of Success"
        subtitle="Discover how we've helped businesses transform their ideas into successful digital products with cutting-edge technology."
      >
        <StatsSection stats={projectStats} />
      </SectionHeader>
      <ProjectFilterSection
        categories={projectCategories}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <PortfolioGrid activeTab={activeTab}
      />
    </>
  );
};

export default PortfolioPage;
