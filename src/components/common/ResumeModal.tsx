import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop Blur Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#121212]/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#1A1A1A] border border-[#2E2E2C] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col h-[88vh] my-auto animate-in zoom-in-95 duration-200 text-[#FAF9F5]">
        
        {/* Clean Top Header Bar with Download CTA */}
        <div className="bg-[#161616] border-b border-[#2A2A28] px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <FileText className="w-5 h-5 text-[#E5C158]" />
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-white">
                Bala Venkataraju Singampalli — Resume PDF
              </h3>
              <p className="text-xs font-mono text-[#A1A19A]">
                Software Engineer • Official Curriculum Vitae
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Direct Download PDF Button */}
            <a
              href="/Bala_Venkataraju_Singampalli_Resume.pdf"
              download="Bala_Venkataraju_Singampalli_Resume.pdf"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#E5C158] hover:bg-[#F0D070] text-[#121212] font-mono text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            {/* Open in New Tab Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1 px-3 py-2 bg-[#242422] hover:bg-[#2F2F2C] border border-[#3E3E3B] text-xs font-mono text-[#A1A19A] hover:text-white rounded-xl transition-colors"
            >
              <span>Open PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#242422] hover:bg-[#2F2F2C] border border-[#3E3E3B] text-[#A1A19A] hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer Body */}
        <div className="flex-1 bg-[#121212] p-2 sm:p-4 overflow-hidden relative">
          <iframe
            src="/resume.pdf#toolbar=0"
            className="w-full h-full rounded-xl border border-[#262624] bg-white"
            title="Bala Venkataraju Singampalli Official Resume PDF"
          />
        </div>

        {/* Bottom Download Bar */}
        <div className="bg-[#161616] border-t border-[#2A2A28] px-6 py-3 flex items-center justify-between text-xs font-mono text-[#A1A19A] shrink-0">
          <span>Official Resume PDF • BALA VENKATARAJU SINGAMPALLI</span>
          <a
            href="/Bala_Venkataraju_Singampalli_Resume.pdf"
            download="Bala_Venkataraju_Singampalli_Resume.pdf"
            className="text-[#E5C158] hover:underline flex items-center space-x-1 font-bold"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download File (PDF)</span>
          </a>
        </div>

      </div>
    </div>
  );
};
