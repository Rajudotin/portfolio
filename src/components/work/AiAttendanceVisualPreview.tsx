import React from "react";

export const AiAttendanceVisualPreview: React.FC<{ isCompact?: boolean }> = ({
  isCompact = false,
}) => {
  return (
    <div
      className={`w-full bg-[#0F141C] rounded-2xl overflow-hidden border border-[#1E293B] shadow-xl relative group transition-all duration-300 ${
        isCompact ? "min-h-[300px]" : "min-h-[380px]"
      }`}
    >
      {/* Top Browser URL Bar */}
      <div className="bg-[#182232] border-b border-[#243347] px-4 py-3 flex items-center justify-between relative z-20">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          <span className="text-xs font-mono text-[#94A3B8] ml-2 hidden sm:inline">
            https://eduvision-frontend.vercel.app
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono font-bold text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-0.5 rounded border border-[#38BDF8]/20">
            EDUVISION AI • BIOMETRICS
          </span>
        </div>
      </div>

      {/* Clean Coverpage Image Showcase */}
      <div className="relative w-full overflow-hidden">
        <img
          src="/images/eduvision_coverpage.png"
          alt="EduVision AI Attendance System Coverpage Showcase"
          className="w-full h-auto object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
    </div>
  );
};
