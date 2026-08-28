import React from "react";
import { Link } from "react-router-dom";

export const GymVisualPreview: React.FC<{
  isCompact?: boolean;
  projectSlug?: string;
}> = ({ projectSlug = "gym-website" }) => {
  return (
    <div className="w-full bg-[#141414] rounded-2xl overflow-hidden border border-[#262626] shadow-xl relative group transition-all duration-300">
      {/* Top Browser URL Bar */}
      <div className="bg-[#1C1C1C] border-b border-[#2E2E2E] px-4 py-3 flex items-center justify-between relative z-20">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          <span className="text-xs font-mono text-[#A3A3A3] ml-2 hidden sm:inline">
            https://fit-forge-gym-kappa.vercel.app
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono font-bold text-[#CCFF00] bg-[#CCFF00]/10 px-2.5 py-0.5 rounded border border-[#CCFF00]/20">
            FITFORGE ATHLETIC CLUB
          </span>
        </div>
      </div>

      {/* Clean Coverpage Image Showcase */}
      <Link
        to={`/work/${projectSlug}`}
        className="block relative w-full overflow-hidden cursor-pointer"
        aria-label="Click to view FitForge Gym Case Study"
      >
        <img
          src="/images/gym_coverpage.png"
          alt="FitForge Gym Athletic Club Coverpage Showcase"
          className="w-full h-auto object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
        />
      </Link>
    </div>
  );
};
