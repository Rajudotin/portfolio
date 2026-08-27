import React from "react";
import { projectsData } from "../../data/projectsData";
import { ProjectCard } from "./ProjectCard";

export const SelectedWorkSection: React.FC = () => {
  return (
    <section
      id="work"
      className="py-20 sm:py-32 bg-[#FAF9F5] border-b border-[#E8E5DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#E8E5DC] pb-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#161616]" />
              <span className="text-xs uppercase font-mono tracking-widest text-[#82827C]">
                FEATURED PORTFOLIO WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display tracking-tight text-[#161616]">
              Selected Work
            </h2>
          </div>
          <p className="text-sm font-mono text-[#82827C] mt-4 md:mt-0">
            EXACTLY 03 FEATURED PROJECTS
          </p>
        </div>

        {/* Alternating Project List */}
        <div className="space-y-4">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isReversed={index % 2 !== 0} // Project 01: Normal, Project 02: Reversed, Project 03: Normal
            />
          ))}
        </div>
      </div>
    </section>
  );
};
