'use client';
import React from 'react';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenRegister: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Abstract Animated SVG Z Geometric Centerpiece (Subtle Depth) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 800 800"
          className="w-[300px] sm:w-[480px] md:w-[600px] lg:w-[720px] h-auto opacity-[0.12] animate-pulse-glow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="zNeonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <filter id="zGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="18" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Structural Z Polygon */}
          <polygon
            points="180,160 640,160 300,640 660,640 620,700 140,700 480,220 180,220"
            fill="url(#zNeonGrad)"
            opacity="0.08"
          />

          {/* Animated Stroke Outline Z */}
          <path
            d="M 180,180 L 640,180 L 220,660 L 660,660"
            stroke="url(#zNeonGrad)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#zGlow)"
            className="animate-svg-dash"
          />

          {/* Tech Geometric Corner Accents */}
          <circle cx="180" cy="180" r="8" fill="#00F0FF" />
          <circle cx="640" cy="180" r="8" fill="#38BDF8" />
          <circle cx="220" cy="660" r="8" fill="#8B5CF6" />
          <circle cx="660" cy="660" r="8" fill="#A855F7" />
        </svg>
      </div>

      {/* Main Centered Content Container */}
      <div className="max-w-4xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
        
        {/* 1. Presenter Top Pill: Department of BCA, VIMTECH */}
        <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-full bg-[#090E1A]/90 border border-[#00F0FF]/30 text-xs sm:text-sm font-mono font-bold tracking-[0.16em] text-[#00F0FF] uppercase mb-4 shadow-md backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
          <span className="text-white font-extrabold">DEPARTMENT OF BCA, VIMTECH</span>
        </div>

        {/* 2. Highlighted HACK Z Hero Centerpiece with Glowing 2026 & Subtitle */}
        <div className="relative flex flex-col items-center mb-5 group">
          {/* Ambient Spotlight Behind Logo */}
          <div className="absolute inset-0 -m-8 bg-gradient-to-r from-[#00F0FF]/25 via-[#38BDF8]/20 to-[#8B5CF6]/25 blur-3xl rounded-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />
          
          {/* Main HACK Z Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/hackz-logo.png" 
            alt="HACKZ" 
            className="relative z-10 h-20 sm:h-28 md:h-32 lg:h-36 w-auto object-contain drop-shadow-[0_0_45px_rgba(0,240,255,0.65)] group-hover:scale-105 transition-transform duration-300 mb-2" 
          />

          {/* High-Visibility Glowing 2026 Cyber Outline Graphic */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/hackz-year-2026.png" 
            alt="2026" 
            className="relative z-10 h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_0_20px_rgba(0,240,255,0.85)] filter brightness-125 mb-3" 
          />

          {/* Intra-College Hackathon Subtitle */}
          <div className="relative z-10 font-mono text-xs sm:text-sm font-bold tracking-[0.28em] text-[#00F0FF] uppercase flex items-center gap-2 drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]">
            <Sparkles className="w-4 h-4 text-[#00F0FF]" />
            <span>INTRA-COLLEGE HACKATHON</span>
            <Sparkles className="w-4 h-4 text-[#00F0FF]" />
          </div>
        </div>

        {/* 4. Refined Motto Tagline */}
        <div className="mb-2 max-w-2xl">
          <h2 className="font-orbitron font-black text-base sm:text-xl md:text-2xl tracking-wide uppercase leading-snug drop-shadow-lg">
            <span className="text-white">THINK BOLD. </span>
            <span className="gradient-text-electric">BUILD SMART. </span>
            <span className="text-white">CHANGE </span>
            <span className="gradient-text-cyan">TOMORROW.</span>
          </h2>
        </div>

        {/* 5. Exact Requested Short Description */}
        <p className="text-slate-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-xl mb-6">
          A 6-hour innovation sprint where student teams turn bold ideas into real-world solutions.
        </p>

        {/* 6. Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#8B5CF6] text-slate-950 font-display font-extrabold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-current text-slate-950" />
            <span>REGISTER SQUAD NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#domains"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#090E1A]/90 border border-white/15 text-white font-display font-bold text-xs sm:text-sm hover:border-[#00F0FF] hover:text-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all flex items-center justify-center"
          >
            EXPLORE DOMAINS
          </a>
        </div>

      </div>
    </section>
  );
};
