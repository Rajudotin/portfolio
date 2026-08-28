import React from "react";
import { projectsData } from "../../data/projectsData";
import { ProjectCard } from "./ProjectCard";

export const SelectedWorkSection: React.FC = () => {
  return (
    <section
      id="work"
      className="py-12 sm:py-16 bg-[#FAF9F5] border-b border-[#E8E5DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-[#E8E5DC] pb-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#82827C] block mb-1">
              PORTFOLIO
            </span>
            <h2 className="text-2xl sm:text-4xl font-display tracking-tight text-[#161616]">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs font-mono text-[#82827C] mt-2 md:mt-0">
            Recent web platforms, mobile apps & AI systems I've built.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-4">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
