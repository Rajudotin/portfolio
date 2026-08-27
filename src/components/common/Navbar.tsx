import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { RajuLogo } from './RajuLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3'
          : 'py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Logo (Raju.in) */}
          <Link
            to="/"
            className="group flex items-center space-x-3 focus-visible:outline-hidden"
            aria-label="Raju.in Home"
          >
            <RajuLogo size={32} className="text-[#161616] group-hover:scale-105 transition-transform duration-200" />
            <span className="font-bold font-mono tracking-tight text-lg sm:text-xl text-[#161616] group-hover:text-[#52524E] transition-colors leading-none">
              Raju<span className="text-[#82827C]">.in</span>
            </span>
          </Link>

          {/* Center: Floating Pill Navigation Container */}
          <nav className="hidden md:flex items-center bg-[#FAF9F5]/90 border border-[#E8E5DC] rounded-full px-6 py-2 shadow-xs backdrop-blur-md space-x-6 text-xs font-semibold uppercase tracking-wider text-[#52524E]">
            <button
              onClick={() => handleNavClick('#')}
              className="hover:text-[#161616] transition-colors cursor-pointer py-1"
            >
              Home
            </button>
            {siteConfig.navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-[#161616] transition-colors cursor-pointer py-1"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right: Floating Pill CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('#contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF9F5] bg-[#161616] hover:bg-[#262624] rounded-full transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md active:translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full bg-[#FAF9F5] border border-[#E8E5DC] text-[#161616] focus:outline-hidden transition-colors shadow-xs"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
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
          <nav className="flex flex-col space-y-6 text-lg font-medium text-[#161616]">
            {siteConfig.navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 border-b border-[#E8E5DC] flex items-center justify-between hover:text-[#52524E] transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-[#82827C]" />
              </button>
            ))}
          </nav>

          <div className="flex flex-col space-y-4 pt-6 border-t border-[#E8E5DC]">
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full py-3.5 px-4 text-center font-semibold uppercase tracking-wider text-sm text-[#FAF9F5] bg-[#161616] rounded-full shadow-sm active:bg-[#262624]"
            >
              Let's Talk
            </button>
            <p className="text-xs text-center font-mono text-[#82827C]">
              {siteConfig.positioning}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
