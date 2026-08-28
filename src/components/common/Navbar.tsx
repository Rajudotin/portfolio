import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { RajuLogo } from './RajuLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for smooth pill highlighting
      if (isHomePage) {
        const sections = ['work', 'skills', 'about', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (!isHomePage) {
      navigate('/' + href);
    } else {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('');
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#FAF9F5] border-b border-[#E8E5DC] shadow-xs'
          : 'py-5 sm:py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Logo (Raju.in) */}
          <Link
            to="/"
            onClick={() => handleNavClick('#')}
            className="group flex items-center space-x-3 focus-visible:outline-hidden"
            aria-label="Raju.in Home"
          >
            <RajuLogo size={32} className="text-[#161616] group-hover:scale-105 transition-transform duration-200" />
            <span className="font-bold font-mono tracking-tight text-lg sm:text-xl text-[#161616] group-hover:text-[#52524E] transition-colors leading-none">
              Raju<span className="text-[#82827C]">.in</span>
            </span>
          </Link>

          {/* Center: Normal Solid Navigation Container (Home | Work | Skills | About | Contact) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center bg-[#FAF9F5] border border-[#E8E5DC] rounded-full px-6 py-2 shadow-xs space-x-5 text-xs font-semibold uppercase tracking-wider text-[#52524E]"
          >
            <button
              onClick={() => handleNavClick('#')}
              aria-label="Navigate to Home section"
              className={`hover:text-[#161616] transition-colors cursor-pointer py-1 px-2 rounded-full ${
                activeSection === '' && isHomePage ? 'text-[#161616] font-bold bg-[#E8E5DC]' : ''
              }`}
            >
              Home
            </button>

            {siteConfig.navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = isHomePage && activeSection === sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  aria-label={`Navigate to ${link.name} section`}
                  className={`hover:text-[#161616] transition-colors cursor-pointer py-1 px-2 rounded-full ${
                    isActive ? 'text-[#161616] font-bold bg-[#E8E5DC]' : ''
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right: Solid Pill CTA Buttons (Direct PDF link in new tab) */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/Bala_Venkataraju_Singampalli_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Resume PDF in new tab"
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#161616] bg-[#FAF9F5] hover:bg-[#E8E5DC] border border-[#E8E5DC] rounded-full transition-all duration-200 cursor-pointer shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => handleNavClick('#contact')}
              aria-label="Navigate to Contact section"
              className="inline-flex items-center justify-center px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF9F5] bg-[#161616] hover:bg-[#262624] rounded-full transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md active:translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="/Bala_Venkataraju_Singampalli_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Resume CV in new tab"
              className="px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E8E5DC] text-xs font-mono font-bold text-[#D97706] flex items-center space-x-1 shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full bg-[#FAF9F5] border border-[#E8E5DC] text-[#161616] focus:outline-hidden transition-colors shadow-xs"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-[#FAF9F5] md:hidden flex flex-col justify-between px-6 py-8 border-t border-[#E8E5DC] animate-in fade-in duration-200">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-5 text-lg font-medium text-[#161616]">
            <button
              onClick={() => handleNavClick('#')}
              aria-label="Navigate to Home section"
              className="text-left py-2 border-b border-[#E8E5DC] flex items-center justify-between hover:text-[#52524E] transition-colors"
            >
              <span>Home</span>
              <ArrowUpRight className="w-5 h-5 text-[#82827C]" />
            </button>

            {siteConfig.navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                aria-label={`Navigate to ${link.name} section`}
                className="text-left py-2 border-b border-[#E8E5DC] flex items-center justify-between hover:text-[#52524E] transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-[#82827C]" />
              </button>
            ))}

            <a
              href="/Bala_Venkataraju_Singampalli_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Resume PDF in new tab"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left py-2 border-b border-[#E8E5DC] flex items-center justify-between text-[#D97706] font-bold"
            >
              <span>View Resume PDF ↗</span>
              <FileText className="w-5 h-5" />
            </a>
          </nav>

          <div className="flex flex-col space-y-4 pt-6 border-t border-[#E8E5DC]">
            <button
              onClick={() => handleNavClick('#contact')}
              aria-label="Navigate to Contact section"
              className="w-full py-3.5 px-4 text-center font-semibold uppercase tracking-wider text-sm text-[#FAF9F5] bg-[#161616] rounded-full shadow-sm active:bg-[#262624]"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
