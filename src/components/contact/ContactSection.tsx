import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { Mail, Github, Linkedin, ArrowUpRight, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 bg-[#161616] text-[#FAF9F5] relative overflow-hidden border-b border-[#262624]"
      aria-label="Contact Section"
    >
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Final Message */}
          <div className="lg:col-span-7 space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#262624] border border-[#383834] px-3.5 py-1.5 rounded-full text-xs font-mono text-[#E5C158]">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Available for engineering roles & project inquiries</span>
            </div>

            <p className="text-xs font-mono uppercase tracking-widest text-[#A1A19A] block mt-1">
              {siteConfig.contactSubheadline}
            </p>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#FAF9F5] leading-tight">
              {siteConfig.contactHeadline}
            </h2>

            <p className="text-xs sm:text-sm text-[#A1A19A] font-mono max-w-xl leading-relaxed">
              Open for full-time software engineering roles, full-stack product development, and technical project collaborations.
            </p>
          </div>

          {/* Right Column: Contact CTAs & Real Channels */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            
            {/* Primary CTA: Start a Conversation */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start a conversation via WhatsApp"
              className="w-full inline-flex items-center justify-between px-5 py-4 text-xs font-bold uppercase tracking-wider text-[#FAF9F5] bg-[#10B981] hover:bg-[#059669] rounded-xl transition-all duration-200 shadow-md group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#10B981]"
            >
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-[#FAF9F5]" />
                <span className="text-sm">Start a Conversation</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#FAF9F5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </a>

            {/* Email Me */}
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Send direct email"
              className="w-full inline-flex items-center justify-between px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#161616] bg-[#FAF9F5] hover:bg-[#E5E5DF] rounded-xl transition-all duration-200 shadow-md group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FAF9F5]"
            >
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#161616]" />
                <span>Email Me</span>
              </div>
              <span className="text-[11px] font-mono text-[#52524E] normal-case tracking-normal truncate max-w-[180px] sm:max-w-[220px]">
                {siteConfig.email}
              </span>
            </a>

            {/* Real Social Links Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn profile"
                className="inline-flex items-center justify-between px-4 py-3 text-xs font-mono tracking-wider text-[#FAF9F5] bg-[#262624] hover:bg-[#333330] border border-[#383834] rounded-xl transition-all duration-200 group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#64B5F6]"
              >
                <div className="flex items-center space-x-2">
                  <Linkedin className="w-3.5 h-3.5 text-[#64B5F6]" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A19A] group-hover:text-[#FAF9F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile"
                className="inline-flex items-center justify-between px-4 py-3 text-xs font-mono tracking-wider text-[#FAF9F5] bg-[#262624] hover:bg-[#333330] border border-[#383834] rounded-xl transition-all duration-200 group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
              >
                <div className="flex items-center space-x-2">
                  <Github className="w-3.5 h-3.5 text-[#FAF9F5]" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A19A] group-hover:text-[#FAF9F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
