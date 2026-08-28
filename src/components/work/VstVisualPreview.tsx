import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  GraduationCap,
  MapPin,
  Calendar,
  Star,
  Clock,
  Monitor,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

export const VstVisualPreview: React.FC<{
  isCompact?: boolean;
  projectSlug?: string;
}> = ({ projectSlug = "vst-beauty-academy" }) => {
  const [viewMode, setViewMode] = useState<"web" | "mobile">("web");
  const [activeMobileTab, setActiveMobileTab] = useState<"salon" | "academy">("salon");

  return (
    <div className="w-full bg-[#161616] rounded-2xl overflow-hidden border border-[#2E2E2C] shadow-xl transition-all duration-300 relative group">
      {/* Top Controls Header Bar: Web Platform vs Mobile Application Toggle */}
      <div className="bg-[#1C1C1A] border-b border-[#2A2A28] px-3.5 py-2.5 flex items-center justify-between flex-wrap gap-2 z-20">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <span className="text-[10px] font-mono text-[#A1A19A] ml-2 hidden sm:inline">
            {viewMode === "web" ? "https://vst-saloon.vercel.app" : "VST Beauty Care Mobile App"}
          </span>
        </div>

        {/* Clean Web vs Mobile Platform Toggle Pill */}
        <div className="flex items-center bg-[#121212] border border-[#2A2A28] p-0.5 rounded-lg text-[10px] font-mono">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setViewMode("web");
            }}
            aria-label="Show Web Platform Preview"
            className={`px-3 py-1 rounded-md flex items-center space-x-1.5 transition-all cursor-pointer ${
              viewMode === "web"
                ? "bg-[#FAF9F5] text-[#161616] font-bold shadow-xs"
                : "text-[#A1A19A] hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Web Platform</span>
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setViewMode("mobile");
            }}
            aria-label="Show Mobile App Preview"
            className={`px-3 py-1 rounded-md flex items-center space-x-1.5 transition-all cursor-pointer ${
              viewMode === "mobile"
                ? "bg-[#E5C158] text-[#121212] font-bold shadow-xs"
                : "text-[#A1A19A] hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile App</span>
          </button>
        </div>
      </div>

      {/* Dynamic Content View Area */}
      {viewMode === "web" ? (
        /* WEB PLATFORM VIEW: Coverpage Link Trigger (Fits image perfectly without bottom black gap) */
        <div className="relative w-full overflow-hidden bg-[#161616] group/cover">
          <Link
            to={`/work/${projectSlug}`}
            className="block w-full relative cursor-pointer group/link"
            aria-label="Click to view VST Case Study Page"
          >
            <img
              src="/images/vst_coverpage.png"
              alt="VST Beauty Care & Academy Desktop Web Platform — Click to open case study"
              className="w-full h-auto object-cover object-top opacity-95 group-hover/link:opacity-100 transition-opacity"
            />
            {/* Click Cover Page Badge Overlay */}
            <div className="absolute top-3 right-3 bg-[#121212]/90 border border-[#383834] px-3 py-1.5 rounded-full text-[10px] font-mono font-bold text-[#E5C158] flex items-center space-x-1.5 opacity-0 group-hover/link:opacity-100 transition-opacity shadow-lg">
              <span>View Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      ) : (
        /* MOBILE APPLICATION VIEW: Centered Smartphone Mockup Showcase */
        <div
          className="relative w-full p-5 sm:p-7 bg-[#161616] flex items-center justify-center min-h-[340px]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Centered Mobile Phone Frame */}
          <div className="w-[200px] sm:w-[220px] bg-[#121212] rounded-[36px] border-[5px] border-[#383834] shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col justify-between transition-transform duration-300">
            
            {/* Phone Top Notch */}
            <div className="bg-[#181816] pt-2 px-3.5 pb-1 flex items-center justify-between border-b border-[#262624] text-[9px] font-mono text-[#A1A19A]">
              <span>9:41</span>
              <div className="w-12 h-2 bg-[#000000] rounded-full mx-auto" />
              <span>5G</span>
            </div>

            {/* Mobile Dual-Role Tab Switcher */}
            <div className="bg-[#1C1C1A] px-2 py-1.5 border-b border-[#262624] flex items-center justify-around text-[9px] font-mono font-bold">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveMobileTab("salon");
                }}
                className={`px-3 py-1 rounded-full flex items-center space-x-1 cursor-pointer transition-colors ${
                  activeMobileTab === "salon"
                    ? "bg-[#E5C158] text-[#121212] shadow-xs"
                    : "text-[#A1A19A] hover:text-white"
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>Salon</span>
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveMobileTab("academy");
                }}
                className={`px-3 py-1 rounded-full flex items-center space-x-1 cursor-pointer transition-colors ${
                  activeMobileTab === "academy"
                    ? "bg-[#64B5F6] text-[#121212] shadow-xs"
                    : "text-[#A1A19A] hover:text-white"
                }`}
              >
                <GraduationCap className="w-3 h-3" />
                <span>Academy</span>
              </button>
            </div>

            {/* Mobile Screen Body */}
            <div className="p-3 space-y-2.5 bg-[#121212] min-h-[250px] text-[#FAF9F5]">
              {activeMobileTab === "salon" ? (
                <div className="space-y-2.5 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between text-[9px] font-mono text-[#E5C158]">
                    <span className="flex items-center space-x-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>VST SALON</span>
                    </span>
                    <span className="text-[8px] text-[#10B981] font-bold">OPEN NOW</span>
                  </div>

                  <div className="bg-gradient-to-br from-[#242420] to-[#1A1A18] border border-[#E5C158]/40 p-2.5 rounded-xl">
                    <span className="text-[8px] font-mono text-[#E5C158] block mb-0.5">BRIDAL SPECIAL</span>
                    <h6 className="text-[10px] font-bold text-white leading-tight mb-1.5">
                      Beauty for Every Special Moment
                    </h6>
                    <span className="text-[8px] font-mono bg-[#E5C158] text-[#121212] px-2.5 py-1 rounded-lg block text-center font-bold">
                      Book Slot ✓
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[8px] font-mono text-[#A1A19A]">
                      <span>POPULAR SERVICES</span>
                      <span className="text-[#E5C158]">₹ INR</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-[8px] font-mono">
                      <div className="bg-[#1A1A18] border border-[#2A2A28] p-1.5 rounded-lg">
                        <div className="flex items-center justify-between text-white font-bold mb-0.5">
                          <span className="truncate">Bridal</span>
                          <Star className="w-2 h-2 fill-[#E5C158] text-[#E5C158]" />
                        </div>
                        <span className="text-[#E5C158] block">₹8,999</span>
                      </div>
                      <div className="bg-[#1A1A18] border border-[#2A2A28] p-1.5 rounded-lg">
                        <div className="flex items-center justify-between text-white font-bold mb-0.5">
                          <span className="truncate">Hair</span>
                          <Star className="w-2 h-2 fill-[#E5C158] text-[#E5C158]" />
                        </div>
                        <span className="text-[#E5C158] block">₹2,499</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1A1A18] border border-[#2A2A28] p-2 rounded-lg text-[8px] font-mono flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-[#A1A19A]">
                      <Calendar className="w-2.5 h-2.5 text-[#E5C158]" />
                      <span>Today 4:00 PM</span>
                    </div>
                    <span className="text-[#10B981] font-bold">CONFIRMED</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2.5 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between text-[9px] font-mono text-[#64B5F6]">
                    <span>STUDENT PORTAL</span>
                    <span className="text-[8px] text-[#E5C158] font-bold">ACTIVE</span>
                  </div>

                  <div className="bg-[#16202C] border border-[#64B5F6]/40 p-2.5 rounded-xl space-y-1.5">
                    <span className="text-[8px] font-mono text-[#64B5F6] block">ACADEMY DIPLOMA</span>
                    <h6 className="text-[10px] font-bold text-white">Beautician Course</h6>
                    <div className="w-full h-1.5 bg-[#121620] rounded-full overflow-hidden border border-[#64B5F6]/20">
                      <div className="w-[78%] h-full bg-[#64B5F6]" />
                    </div>
                    <div className="flex items-center justify-between text-[8px] font-mono text-[#A1A19A]">
                      <span>Modules 14/18</span>
                      <span className="text-white font-bold">78%</span>
                    </div>
                  </div>

                  <div className="bg-[#1A1A18] border border-[#2A2A28] p-2 rounded-lg text-[8px] font-mono space-y-1">
                    <div className="flex items-center space-x-1 text-[#64B5F6]">
                      <Clock className="w-2.5 h-2.5" />
                      <span className="font-bold">Today's Class</span>
                    </div>
                    <span className="text-[#A1A19A] block">10:00 AM — Practical Makeup</span>
                  </div>
                </div>
              )}
            </div>

            {/* Phone Bottom Home Bar */}
            <div className="bg-[#181816] py-1.5 flex justify-center border-t border-[#262624]">
              <div className="w-14 h-1 bg-white/40 rounded-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
