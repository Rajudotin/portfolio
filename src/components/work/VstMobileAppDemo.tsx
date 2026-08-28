import React, { useState } from "react";
import {
  Sparkles,
  GraduationCap,
  MapPin,
  Calendar,
  Clock,
  ChevronRight,
  BookOpen,
  Award,
  Star,
  PhoneCall,
} from "lucide-react";

export const VstMobileAppDemo: React.FC = () => {
  const [activeRole, setActiveRole] = useState<"customer" | "student">(
    "customer",
  );
  const [selectedService, setSelectedService] =
    useState<string>("Bridal Makeup");
  const [booked, setBooked] = useState(false);

  const handleBook = () => {
    setBooked(true);
    setTimeout(() => setBooked(false), 2500);
  };

  return (
    <div className="w-full flex flex-col items-center py-6">
      {/* Role Switcher Pill Bar */}
      <div className="bg-[#1C1C1A] border border-[#2E2E2C] p-1.5 rounded-full flex items-center space-x-2 mb-6 shadow-md z-10">
        <button
          onClick={() => setActiveRole("customer")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
            activeRole === "customer"
              ? "bg-[#E5C158] text-[#121212] shadow-sm"
              : "text-[#A1A19A] hover:text-white"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Customer App</span>
        </button>

        <button
          onClick={() => setActiveRole("student")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
            activeRole === "student"
              ? "bg-[#64B5F6] text-[#121212] shadow-sm"
              : "text-[#A1A19A] hover:text-white"
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Student Academy</span>
        </button>
      </div>

      {/* Realistic Mobile Device Frame */}
      <div className="relative w-[300px] sm:w-[320px] h-[600px] bg-[#121212] rounded-[44px] border-[8px] border-[#2A2A28] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between">
        {/* Dynamic Island / Top Camera Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#000000] rounded-full z-40 flex items-center justify-end px-2 space-x-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A]" />
          <div className="w-2 h-2 rounded-full bg-[#059669]/60 animate-pulse" />
        </div>

        {/* Status Bar */}
        <div className="pt-8 px-6 pb-2 flex items-center justify-between text-[10px] font-mono text-[#A1A19A] z-30 bg-[#161616]">
          <span>9:41</span>
          <div className="flex items-center space-x-1.5">
            <span>5G</span>
            <div className="w-4 h-2 border border-[#A1A19A] rounded-xs p-0.5 flex items-center">
              <div className="w-full h-full bg-[#E5C158]" />
            </div>
          </div>
        </div>

        {/* MOBILE APP SCREEN CONTENT */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 text-[#FAF9F5] scrollbar-none">
          {/* CUSTOMER APP EXPERIENCE SCREEN */}
          {activeRole === "customer" && (
            <div className="space-y-4 animate-in fade-in duration-300">
              {/* Branch Header */}
              <div className="bg-[#1C1C1A] border border-[#2E2E2C] p-3 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-[10px] font-mono text-[#E5C158]">
                    <MapPin className="w-3 h-3" />
                    <span>VST BEAUTY CARE</span>
                  </div>
                  <h5 className="text-xs font-bold font-display text-white">
                    Yelamanchili & Atchutapuram, AP
                  </h5>
                </div>
                <span className="text-[9px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full border border-[#10B981]/20">
                  OPEN NOW
                </span>
              </div>

              {/* Special Moment Hero Card */}
              <div className="bg-gradient-to-br from-[#242420] to-[#1A1A18] border border-[#E5C158]/30 p-4 rounded-2xl relative overflow-hidden">
                <span className="text-[9px] font-mono text-[#E5C158] uppercase tracking-wider block mb-1">
                  BRIDAL & PRE-WEDDING
                </span>
                <h4 className="text-sm font-bold font-display text-white mb-1">
                  Beauty for Every Special Moment
                </h4>
                <p className="text-[10px] text-[#A1A19A] leading-relaxed mb-3">
                  Everyday confidence, bridal packages, and expert styling.
                </p>

                <button
                  onClick={handleBook}
                  className="w-full bg-[#E5C158] hover:bg-[#F0D070] text-[#121212] font-mono text-xs font-bold py-2 rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{booked ? "Slot Booked ✓" : "Book Service Now"}</span>
                </button>
              </div>

              {/* Service Categories Grid */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A1A19A]">
                  Popular Salon Services
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: "Bridal Makeup", price: "₹8,999", rating: "4.9" },
                    { name: "Hair Treatment", price: "₹2,499", rating: "4.8" },
                    {
                      name: "Skin Glow Facial",
                      price: "₹1,899",
                      rating: "4.9",
                    },
                    {
                      name: "Pre-Wedding Shoot",
                      price: "₹12,499",
                      rating: "5.0",
                    },
                  ].map((s) => (
                    <div
                      key={s.name}
                      onClick={() => setSelectedService(s.name)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedService === s.name
                          ? "bg-[#2A2A26] border-[#E5C158] shadow-xs"
                          : "bg-[#181816] border-[#2A2A28] hover:border-[#3E3E3B]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-white truncate">
                          {s.name}
                        </span>
                        <div className="flex items-center space-x-0.5 text-[9px] font-mono text-[#E5C158]">
                          <Star className="w-2.5 h-2.5 fill-[#E5C158]" />
                          <span>{s.rating}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#E5C158] block">
                        {s.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Slot Picker */}
              <div className="bg-[#181816] border border-[#2A2A28] p-3 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#A1A19A]">
                  <span>AVAILABLE SLOTS</span>
                  <span className="text-[#E5C158]">Yelamanchili Branch</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-[#242422] border border-[#E5C158]/50 p-2 rounded-xl text-center">
                    <span className="text-[10px] font-bold font-mono text-white block">
                      Today
                    </span>
                    <span className="text-[9px] font-mono text-[#E5C158]">
                      4:00 PM
                    </span>
                  </div>
                  <div className="flex-1 bg-[#1C1C1A] border border-[#2A2A28] p-2 rounded-xl text-center">
                    <span className="text-[10px] font-bold font-mono text-[#A1A19A] block">
                      Tomorrow
                    </span>
                    <span className="text-[9px] font-mono text-[#A1A19A]">
                      10:30 AM
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Call / WhatsApp CTA */}
              <a
                href="https://wa.me/916281285084?text=Hi%20Bala%20Venkataraju,%20I%20saw%20your%20VST%20Beauty%20Care%20project%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366]/10 border border-[#25D366]/30 p-2.5 rounded-2xl flex items-center justify-between text-xs text-[#25D366] font-mono"
              >
                <div className="flex items-center space-x-2">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Direct Branch Consultation</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* STUDENT ACADEMY EXPERIENCE SCREEN */}
          {activeRole === "student" && (
            <div className="space-y-4 animate-in fade-in duration-300">
              {/* Student Profile Card */}
              <div className="bg-[#1C1C1A] border border-[#2E2E2C] p-3 rounded-2xl flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#64B5F6]/20 border border-[#64B5F6]/40 flex items-center justify-center font-bold text-xs text-[#64B5F6]">
                  AS
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Ananya S.</h5>
                  <p className="text-[9px] font-mono text-[#64B5F6]">
                    Diploma in Professional Beautician
                  </p>
                </div>
              </div>

              {/* Course Progress Card */}
              <div className="bg-gradient-to-br from-[#1E2632] to-[#141A24] border border-[#64B5F6]/30 p-4 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#64B5F6] font-bold">
                    COURSE PROGRESS
                  </span>
                  <span className="text-xs font-mono text-white font-bold">
                    78%
                  </span>
                </div>

                <div className="w-full h-2 bg-[#121620] rounded-full overflow-hidden border border-[#64B5F6]/20">
                  <div className="h-full bg-[#64B5F6] rounded-full w-[78%]" />
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-[#A1A19A]">
                  <span>Modules: 14/18</span>
                  <span>Certificates: 2 Earned</span>
                </div>
              </div>

              {/* Today's Practical Schedule */}
              <div className="bg-[#181816] border border-[#2A2A28] p-3 rounded-2xl space-y-2">
                <span className="text-[10px] font-mono text-[#A1A19A] block uppercase">
                  Today's Practical Class
                </span>

                <div className="bg-[#222220] border border-[#333330] p-2.5 rounded-xl flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h6 className="text-xs font-bold text-white">
                      Bridal Makeup Technique
                    </h6>
                    <div className="flex items-center space-x-2 text-[9px] font-mono text-[#A1A19A]">
                      <Clock className="w-3 h-3 text-[#64B5F6]" />
                      <span>10:00 AM - 1:00 PM</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                    ATTENDED
                  </span>
                </div>
              </div>

              {/* Student Portal Actions */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#181816] border border-[#2A2A28] p-3 rounded-xl flex flex-col justify-between space-y-2">
                  <BookOpen className="w-4 h-4 text-[#64B5F6]" />
                  <div>
                    <span className="text-[10px] font-bold text-white block">
                      Assignments
                    </span>
                    <span className="text-[9px] font-mono text-[#A1A19A]">
                      2 Pending
                    </span>
                  </div>
                </div>

                <div className="bg-[#181816] border border-[#2A2A28] p-3 rounded-xl flex flex-col justify-between space-y-2">
                  <Award className="w-4 h-4 text-[#E5C158]" />
                  <div>
                    <span className="text-[10px] font-bold text-white block">
                      Certificates
                    </span>
                    <span className="text-[9px] font-mono text-[#E5C158]">
                      Download PDF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation Bar */}
        <div className="bg-[#161616] border-t border-[#2A2A28] px-6 py-2 flex items-center justify-around text-[#A1A19A] text-[9px] font-mono z-30">
          <div className="flex flex-col items-center text-[#E5C158]">
            <Sparkles className="w-4 h-4" />
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center">
            <Calendar className="w-4 h-4" />
            <span>Bookings</span>
          </div>
          <div className="flex flex-col items-center">
            <GraduationCap className="w-4 h-4" />
            <span>Academy</span>
          </div>
        </div>

        {/* Mobile Bottom Home Indicator Bar */}
        <div className="pb-1 bg-[#161616] flex justify-center">
          <div className="w-32 h-1 bg-[#FAF9F5]/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};
