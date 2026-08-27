import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "../../types";

interface CaseStudyLayoutProps {
  project: Project;
  nextProject: Project;
  children: React.ReactNode;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  project,
  nextProject,
  children,
}) => {
  return (
    <article className="min-h-screen bg-[#FAF9F5] pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/#work"
            className="inline-flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-[#82827C] hover:text-[#161616] transition-colors py-1 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Work</span>
          </Link>
        </div>

        {/* Header Block */}
        <header className="border-b border-[#E8E5DC] pb-12 mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <span className="font-mono text-xs font-bold text-[#161616] bg-[#F2EFE8] px-2.5 py-1 rounded border border-[#E8E5DC]">
              PROJECT {project.number}
            </span>
            <span className="text-xs uppercase font-mono tracking-wider text-[#82827C]">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display tracking-tight text-[#161616] mb-6">
            {project.name}
          </h1>

          <p className="text-xl text-[#52524E] leading-relaxed max-w-3xl mb-8">
            {project.shortDescription}
          </p>

          {/* Role & Key Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E8E5DC]/80 font-mono text-xs text-[#52524E]">
            <div>
              <span className="block text-[#82827C] mb-1">ROLE</span>
              <span className="font-semibold text-[#161616]">
                {project.role}
              </span>
            </div>
            <div>
              <span className="block text-[#82827C] mb-1">PROJECT TYPE</span>
              <span className="font-semibold text-[#161616]">
                {project.badge}
              </span>
            </div>
            <div>
              <span className="block text-[#82827C] mb-1">STATUS</span>
              <span className="font-semibold text-[#161616]">
                {project.currentStatus.split(",")[0]}
              </span>
            </div>
          </div>
        </header>

        {/* Main Case Study Content Slot */}
        <main className="space-y-16 sm:space-y-20">{children}</main>

        {/* Next Project Footer Link */}
        <footer className="mt-20 sm:mt-28 pt-12 border-t border-[#E8E5DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#82827C] block mb-1">
              UP NEXT
            </span>
            <h3 className="text-2xl sm:text-3xl font-display text-[#161616]">
              {nextProject.name}
            </h3>
          </div>
          <Link
            to={`/work/${nextProject.slug}`}
            className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF9F5] bg-[#161616] hover:bg-[#262624] rounded-md transition-all duration-200 cursor-pointer shadow-sm group"
          >
            <span>Explore Next Case Study</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </footer>
      </div>
    </article>
  );
};
