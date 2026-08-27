import React from "react";
import { skillsCategories } from "../../data/skillsData";
import { Layers, Code, Cpu, Layout, CheckCircle2 } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-5 h-5 text-[#161616]" />;
      case "Code":
        return <Code className="w-5 h-5 text-[#161616]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#161616]" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-[#161616]" />;
      default:
        return <Code className="w-5 h-5 text-[#161616]" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-32 bg-[#FAF9F5] border-b border-[#E8E5DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#E8E5DC] pb-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#161616]" />
              <span className="text-xs uppercase font-mono tracking-widest text-[#82827C]">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display tracking-tight text-[#161616]">
              Skills & Capabilities
            </h2>
          </div>
          <p className="text-sm font-mono text-[#82827C] mt-4 md:mt-0 max-w-xs">
            PRODUCT THINKING + FRONTEND ENGINEERING + AI INTEGRATION
          </p>
        </div>

        {/* Grouped Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#FAF9F5] border border-[#E8E5DC] p-8 rounded-xl space-y-6 hover:border-[#161616] transition-colors duration-300"
            >
              <div className="flex items-center space-x-3 border-b border-[#E8E5DC] pb-4">
                <div className="p-2.5 rounded-lg bg-[#F2EFE8] border border-[#E8E5DC]">
                  {getIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-base font-semibold font-mono tracking-tight text-[#161616]">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#82827C] mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center space-x-2 bg-[#F2EFE8] border border-[#E8E5DC] px-3 py-1.5 rounded-md text-xs font-medium text-[#161616]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
