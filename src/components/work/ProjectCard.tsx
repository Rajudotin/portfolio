import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle2, UserCheck } from "lucide-react";
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
        return <VstVisualPreview projectSlug={project.slug} />;
      case "ai-attendance":
        return <AiAttendanceVisualPreview projectSlug={project.slug} />;
      case "gym":
        return <GymVisualPreview projectSlug={project.slug} />;
      default:
        return null;
    }
  };

  const getProjectHighlights = () => {
    if (project.id === "vst-beauty-academy") {
      return [
        "Dual-role React Native mobile app & web system for salon bookings and student beauty courses.",
        "Branch location picker for Yelamanchili & Atchutapuram, Andhra Pradesh.",
        "Interactive service directory, appointment scheduling, and student assignment tracking.",
      ];
    }
    if (project.id === "ai-attendance") {
      return [
        "Biometric attendance engine using InsightFace facial recognition with 99.2% model accuracy.",
        "5 microservices behind an Nginx API gateway with Redis vector caching.",
        "Real-time webcam scanning, daily attendance logs, and student photo reference management.",
      ];
    }
    return [
      "Responsive fitness platform featuring workout program directory and trainer spotlights.",
      "Interactive BMI calculator and transparent tiered membership pricing.",
      "Direct 7-day free trial pass booking and consultation contact flow.",
    ];
  };

  const highlights = getProjectHighlights();

  return (
    <article className="py-8 sm:py-12 border-b border-[#E8E5DC] last:border-b-0 group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        
        {/* Prominent Visual Feature Column */}
        <div
          className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
        >
          {renderVisual()}
        </div>

        {/* Text Details & Evidence Column */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between ${isReversed ? "lg:order-1" : "lg:order-2"}`}
        >
          <div>
            {/* Meta Header Badges */}
            <div className="flex items-center space-x-2 mb-3 flex-wrap gap-y-1.5">
              <span className="font-mono text-xs font-bold text-[#161616] bg-[#F2EFE8] px-2 py-0.5 rounded border border-[#E8E5DC]">
                {project.number}
              </span>
              <span className="text-xs uppercase font-mono tracking-wider text-[#82827C]">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-[10px] font-mono text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded border border-[#059669]/20 font-bold">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-display text-[#161616] tracking-tight mb-2 group-hover:text-[#52524E] transition-colors">
              <Link to={`/work/${project.slug}`}>{project.name}</Link>
            </h3>

            {/* Role / Contribution */}
            <div className="flex items-center space-x-1.5 text-xs font-mono text-[#52524E] mb-3">
              <UserCheck className="w-3.5 h-3.5 text-[#161616]" />
              <span>Role: <strong className="text-[#161616]">{project.role}</strong></span>
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-[#52524E] leading-relaxed mb-4">
              {project.shortDescription}
            </p>

            {/* Built Functionality Highlights */}
            <div className="space-y-1.5 mb-4 bg-[#F2EFE8]/50 p-3.5 rounded-xl border border-[#E8E5DC]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#161616] block mb-1">
                KEY FEATURES BUILT
              </span>
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-[#52524E]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-[#FAF9F5] border border-[#E8E5DC] text-[#52524E]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3 flex-wrap gap-y-2 pt-2 border-t border-[#E8E5DC]">
            <Link
              to={`/work/${project.slug}`}
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#FAF9F5] bg-[#161616] hover:bg-[#262624] px-3.5 py-2 rounded-lg transition-all duration-200 cursor-pointer shadow-xs"
            >
              <span>Read Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#161616] bg-[#FAF9F5] hover:bg-[#F2EFE8] border border-[#161616] px-3.5 py-2 rounded-lg transition-all duration-200 shadow-xs"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-[#D97706]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
