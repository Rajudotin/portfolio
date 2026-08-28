import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { BentoGridSection } from '../components/about/BentoGridSection';
import { SelectedWorkSection } from '../components/work/SelectedWorkSection';
import { TechStackGrid } from '../components/skills/TechStackGrid';
import { ProcessSection } from '../components/process/ProcessSection';
import { AboutSection } from '../components/about/AboutSection';
import { ContactSection } from '../components/contact/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <BentoGridSection />
      <SelectedWorkSection />
      <TechStackGrid />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};
