import React from "react";
import { projectsData } from "../data/projectsData";
import { CaseStudyLayout } from "../components/casestudy/CaseStudyLayout";
import { GymVisualPreview } from "../components/work/GymVisualPreview";
import {
  Dumbbell,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
  UserCheck,
  Layers,
} from "lucide-react";

export const GymCaseStudyPage: React.FC = () => {
  const project =
    projectsData.find((p) => p.id === "gym-website") || projectsData[2];
  const nextProject = projectsData[0]; // VST Beauty Care & Academy

  return (
    <CaseStudyLayout project={project} nextProject={nextProject}>
      {/* Live Website Banner Bar */}
      {project.liveUrl && (
        <div className="bg-[#121212] text-[#FAF9F5] p-4 sm:p-5 rounded-xl border border-[#262624] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E5C158]" />
            <div>
              <span className="text-xs font-mono text-[#E5C158] font-bold block uppercase tracking-wider">
                LIVE PRODUCTION WEBSITE
              </span>
              <span className="text-xs font-mono text-[#A1A19A]">
                Deployed on Vercel Edge CDN
              </span>
            </div>
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-[#121212] bg-[#E5C158] hover:bg-[#F0D070] rounded transition-all duration-200 shadow-sm"
          >
            <span>Visit Live Website</span>
            <ExternalLink className="w-3.5 h-3.5 ml-2 text-[#121212]" />
          </a>
        </div>
      )}

      {/* Feature Visual Banner */}
      <section className="space-y-4">
        <GymVisualPreview />
      </section>

      {/* 1. Project Overview */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            PROJECT OVERVIEW
          </h2>
        </div>
        <div className="md:col-span-8 space-y-5 text-[#52524E] leading-relaxed">
          <h3 className="text-2xl font-display text-[#161616]">
            FitForge Gym Athletic Club — Full-Stack Fitness Platform
          </h3>
          <p>{project.fullDescription}</p>
        </div>
      </section>

      {/* 2. The Challenge */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            THE CHALLENGE
          </h2>
        </div>
        <div className="md:col-span-8 space-y-4">
          <p className="text-base text-[#52524E] leading-relaxed">
            {project.problem}
          </p>
          <div className="bg-[#F2EFE8] border border-[#E8E5DC] p-5 rounded-lg space-y-1.5">
            <h4 className="text-xs font-mono font-semibold text-[#161616] uppercase">
              CONVERSION BARRIERS
            </h4>
            <p className="text-sm text-[#161616]">
              Prospective gym members lacked clear membership information, trainer credentials, and an easy way to book trial sessions without phone calls.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Solution */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            THE SOLUTION
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-base text-[#52524E] leading-relaxed">
            {project.solution}
          </p>

          <div className="bg-[#121212] text-[#FAF9F5] p-6 rounded-xl border border-[#262624] space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#E5C158]">
              <Dumbbell className="w-4 h-4" />
              <span>PLATFORM HIGHLIGHTS</span>
            </div>
            <p className="text-sm text-[#A1A19A] leading-relaxed">
              Integrated program directory (Strength, Crossfit, Cardio, HIIT, Yoga), trainer profiles, interactive BMI health calculator, transparent monthly/annual pricing tiers, and a 7-day free trial pass booking modal.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Key Features */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            KEY FEATURES
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          {project.keyFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F5] border border-[#E8E5DC] p-6 rounded-lg space-y-3"
            >
              <h3 className="text-lg font-semibold text-[#161616] flex items-center space-x-2">
                <span className="font-mono text-xs text-[#82827C]">
                  {idx + 1}.
                </span>
                <span>{feature.title}</span>
              </h3>
              <p className="text-sm text-[#52524E] leading-relaxed">
                {feature.description}
              </p>
              {feature.items && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {feature.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs text-[#52524E] flex items-center space-x-2 bg-[#F2EFE8] px-3 py-2 rounded"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#161616] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. Tech Stack */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            TECH STACK
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.technologies.map((tech) => (
              <div
                key={tech.category}
                className="bg-[#FAF9F5] border border-[#E8E5DC] p-5 rounded-lg"
              >
                <span className="text-xs font-mono font-semibold text-[#82827C] block mb-3 uppercase">
                  {tech.category}
                </span>
                <ul className="space-y-2 text-xs text-[#161616] font-medium">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. My Role & Implementation */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            MY ROLE & IMPLEMENTATION
          </h2>
        </div>
        <div className="md:col-span-8 space-y-4">
          <div className="bg-[#F2EFE8]/60 p-5 rounded-lg border border-[#E8E5DC]">
            <span className="text-xs font-mono font-bold text-[#161616] uppercase block mb-2">
              RESPONSIBILITIES
            </span>
            <ul className="space-y-2 text-xs text-[#52524E]">
              {project.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <UserCheck className="w-3.5 h-3.5 text-[#161616] shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            {project.designDecisions.map((decision, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 text-xs text-[#52524E] bg-[#FAF9F5] p-3.5 rounded-lg border border-[#E8E5DC]"
              >
                <Layers className="w-3.5 h-3.5 text-[#161616] shrink-0 mt-0.5" />
                <span>{decision}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Results & Status */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            STATUS & LIVE BUILD
          </h2>
        </div>
        <div className="md:col-span-8 space-y-4">
          <div className="bg-[#121212] text-[#FAF9F5] p-6 rounded-lg border border-[#262624] space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#E5C158]">
              <ShieldCheck className="w-4 h-4" />
              <span>LIVE PRODUCTION STATUS</span>
            </div>
            <p className="text-sm text-[#A1A19A] leading-relaxed">
              {project.currentStatus}
            </p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
};
