import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { Mail, Github, Linkedin, ArrowUpRight, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#161616] text-[#FAF9F5] relative overflow-hidden">
      {/* Editorial Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#262624] border border-[#383834] px-3.5 py-1.5 rounded-full text-xs font-mono text-[#E5C158]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>LET'S COLLABORATE ON YOUR NEXT PRODUCT</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display tracking-tight text-[#FAF9F5] leading-tight">
              {siteConfig.contactHeadline}
            </h2>

            <p className="text-xl sm:text-2xl text-[#A1A19A] font-serif italic">
              "{siteConfig.contactSubheadline}"
            </p>
          </div>

          {/* Action CTAs including WhatsApp */}
          <div className="lg:col-span-5 flex flex-col space-y-3.5">
            {/* WhatsApp CTA */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#FAF9F5] bg-[#25D366] hover:bg-[#22bf5b] rounded-lg transition-all duration-200 shadow-md group"
            >
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-[#FAF9F5]" />
                <span>Chat on WhatsApp</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#FAF9F5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Email CTA */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-full inline-flex items-center justify-between px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#161616] bg-[#FAF9F5] hover:bg-[#E5E5DF] rounded-lg transition-all duration-200 shadow-md group"
            >
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#161616]" />
                <span>Email Me</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#161616] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* LinkedIn CTA */}
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#FAF9F5] bg-[#262624] hover:bg-[#333330] border border-[#383834] rounded-lg transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 text-[#FAF9F5]" />
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A1A19A] group-hover:text-[#FAF9F5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* GitHub CTA */}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#FAF9F5] bg-[#262624] hover:bg-[#333330] border border-[#383834] rounded-lg transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <Github className="w-4 h-4 text-[#FAF9F5]" />
                <span>GitHub</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#A1A19A] group-hover:text-[#FAF9F5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
