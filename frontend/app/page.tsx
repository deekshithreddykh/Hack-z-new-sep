'use client';
import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsStrip } from '@/components/StatsStrip';
import { AboutSection } from '@/components/AboutSection';
import { HighlightsStrip } from '@/components/HighlightsStrip';
import { TracksSection } from '@/components/TracksSection';
import { RulesSection } from '@/components/RulesSection';
import { RoadmapSection } from '@/components/RoadmapSection';
import { PrizesSection } from '@/components/PrizesSection';
import { JudgingSection } from '@/components/JudgingSection';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { RegistrationModal } from '@/components/RegistrationModal';

export default function HomePage() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<string>('AI FOR THE FUTURE');

  const handleOpenRegisterWithTrack = (trackName: string) => {
    setSelectedTrack(trackName);
    setIsRegisterOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#05070B] text-white relative">
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />
      
      <HeroSection onOpenRegister={() => setIsRegisterOpen(true)} />
      <StatsStrip />
      <AboutSection />
      <HighlightsStrip />
      <TracksSection onSelectTrack={handleOpenRegisterWithTrack} />
      <RulesSection />
      <RoadmapSection />
      <PrizesSection />
      <JudgingSection />
      <FaqSection />
      
      <Footer />

      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultTrack={selectedTrack}
      />
    </main>
  );
}
