import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { RajuLogo } from './RajuLogo';
import { FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] text-[#82827C] border-t border-[#262624] py-12 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand: Raju.in with stylized r. mark */}
          <div className="flex items-center space-x-3">
            <RajuLogo size={28} className="text-[#FAF9F5]" />
            <span className="text-[#FAF9F5] font-bold text-lg tracking-tight font-mono">
              Raju<span className="text-[#82827C]">.in</span>
            </span>
          </div>

          {/* Navigation & Contact Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-[#A1A19A]">
            <a href="#work" className="hover:text-[#FAF9F5] transition-colors">Work</a>
            <a href="#about" className="hover:text-[#FAF9F5] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#FAF9F5] transition-colors">Contact</a>
            
            <a
              href="/Bala_Venkataraju_Singampalli_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAF9F5] text-[#A1A19A] flex items-center space-x-1 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#FAF9F5] transition-colors text-[#25D366]">WhatsApp</a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#FAF9F5] transition-colors">GitHub</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#FAF9F5] transition-colors">LinkedIn</a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-[#FAF9F5] transition-colors">Email</a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <span>© {currentYear} Raju.in — Product Developer Portfolio. All rights reserved.</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
