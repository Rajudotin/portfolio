import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Project } from "../../types";
import { VstVisualPreview } from "./VstVisualPreview";
import { AiAttendanceVisualPreview } from "./AiAttendanceVisualPreview";
import { GymVisualPreview } from "./GymVisualPreview";

interface ProjectCardProps {
  project: Project;
  isReversed?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isReversed = false,
}) => {
  const renderVisual = () => {
    switch (project.visualType) {
      case "vst":
        return <VstVisualPreview />;
      case "ai-attendance":
        return <AiAttendanceVisualPreview />;
      case "gym":
        return <GymVisualPreview />;
      default:
        return null;
    }
  };

  return (
    <article className="py-16 sm:py-24 border-b border-[#E8E5DC] last:border-b-0 group">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}
      >
        {/* Visual Preview Column */}
        <div
          className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
        >
          <Link
            to={`/work/${project.slug}`}
            className="block focus-visible:outline-hidden transition-transform duration-300 group-hover:scale-[1.01]"
            aria-label={`View ${project.name} case study`}
          >
            {renderVisual()}
          </Link>
        </div>

        {/* Text Content Column */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between ${isReversed ? "lg:order-1" : "lg:order-2"}`}
        >
          <div>
            {/* Meta Header */}
            <div className="flex items-center space-x-3 mb-4 flex-wrap gap-y-2">
              <span className="font-mono text-xs font-bold text-[#161616] bg-[#F2EFE8] px-2.5 py-1 rounded border border-[#E8E5DC]">
                {project.number}
              </span>
              <span className="text-xs uppercase font-mono tracking-wider text-[#82827C]">
                {project.category}
              </span>
              {project.location && (
                <span className="text-[10px] font-mono text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded border border-[#059669]/20">
                  {project.location}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl font-display text-[#161616] tracking-tight mb-4 group-hover:text-[#52524E] transition-colors">
              <Link to={`/work/${project.slug}`}>{project.name}</Link>
            </h3>

            {/* Short Description */}
            <p className="text-base text-[#52524E] leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-[#FAF9F5] border border-[#E8E5DC] text-[#52524E]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Links */}
          <div className="flex items-center space-x-5 flex-wrap gap-y-3">
            <Link
              to={`/work/${project.slug}`}
              className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-[#161616] hover:text-[#52524E] group/btn transition-colors cursor-pointer py-1"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#FAF9F5] bg-[#161616] hover:bg-[#262624] px-3.5 py-1.5 rounded transition-colors shadow-xs"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-[#E5C158]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
