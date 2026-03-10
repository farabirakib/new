import { useState } from "react";
import { Sparkles } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";
import StatsCounter from "../components/ui/StatsCounter";
import FilterMenu from "../components/ui/FilterMenu";
import PortfolioCard from "../components/portfolio/PortfolioCard";

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

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    category: "Ecommerce",
    client: "Fashion Retail Co.",
    description:
      "Complete redesign and development of a high-traffic platform handling 100K+ visitors.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
    featured: true,
    tags: ["Next.js", "React", "Node.js"],
    extraTags: 3,
    stats: [
      { label: "Revenue", value: "+125%" },
      { label: "Conversion", value: "+65%" },
      { label: "Performance", value: "+300%" },
    ],
  },
  {
    title: "Fitness & Wellness Mobile App",
    category: "Mobile App",
    client: "HealthTrack Inc.",
    description:
      "A cross-platform mobile application featuring real-time workout tracking and AI-driven meal planning.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
    featured: true,
    tags: ["React Native", "Firebase", "Redux"],
    extraTags: 2,
    stats: [
      { label: "Downloads", value: "50K+" },
      { label: "Rating", value: "4.9/5" },
      { label: "Active Users", value: "10K+" },
    ],
  },
  {
    title: "Mooni Premium E-store",
    category: "Web Development",
    client: "Mooni Clothing",
    description:
      "A high-performance, minimalist e-commerce solution focused on smooth user experience and high conversion rates.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
    featured: true,
    tags: ["Next.js", "Tailwind CSS", "Shopify"],
    extraTags: 4,
    stats: [
      { label: "Load Time", value: "0.8s" },
      { label: "SEO Score", value: "100" },
      { label: "Engagement", value: "+85%" },
    ],
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All Projects");

  const filteredPortfolio =
    activeTab === "All Projects"
      ? projects
      : projects.filter((proj) => proj.category === activeTab);

  return (
    <>
      <SectionHeader
        icon={<Sparkles size={20} />}
        badgeText="Our Work"
        title="Portfolio of Success"
        subtitle="Discover how we've helped businesses transform their ideas into successful digital products with cutting-edge technology."
      >
        <StatsCounter stats={projectStats} />
      </SectionHeader>
      <FilterMenu
        categories={projectCategories}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <section className="bg-black  p-4 md:p-8 mt-2">
        <div className="max-w-full mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPortfolio.map((proj, i) => (
              <PortfolioCard key={i} project={proj} />
            ))}
          </div>

          {filteredPortfolio.length === 0 && (
            <div className="text-center text-gray-500 py-20">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
