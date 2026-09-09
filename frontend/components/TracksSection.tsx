'use client';
import React from 'react';
import { TRACKS } from '@/lib/mockData';
import { ArrowRight } from 'lucide-react';

interface TracksSectionProps {
  onSelectTrack: (trackName: string) => void;
}

export const TracksSection: React.FC<TracksSectionProps> = ({ onSelectTrack }) => {
  return (
    <section id="domains" className="py-24 bg-slate-950/60 relative z-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#00F0FF] uppercase tracking-widest mb-3">
              <span className="w-6 h-0.5 bg-[#00F0FF]" />
              02 // Innovation Domains
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-orbitron">
              Select Your <span className="gradient-text-electric">Domain Track</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-base leading-relaxed">
            Choose an innovation track that sparks your passion. Build high-impact solutions with modern AI, cloud, and edge technologies.
          </p>
        </div>

        {/* Grid of Domain Cards (Perfect Uniform 3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TRACKS.map((t) => (
            <div 
              key={t.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#090E1A]/85 backdrop-blur-xl border border-white/10 hover:border-[#00F0FF]/40 flex flex-col justify-between h-full group hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div 
                className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${t.gradient || 'from-[#00F0FF]/15 to-transparent'} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} 
              />

              <div className="flex-1 flex flex-col">
                {/* Top Row: 3D Realistic Emoji + Large Watermark Number */}
                <div className="flex justify-between items-start mb-3 relative z-10">
                  <div className="text-3xl sm:text-4xl filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] select-none">
                    {t.emoji}
                  </div>
                  <span className="font-orbitron font-extrabold text-3xl sm:text-4xl text-slate-800/90 group-hover:text-slate-700 tracking-wider select-none transition-colors">
                    {t.num}
                  </span>
                </div>

                {/* Headline in Orbitron Font */}
                <h3 className="font-orbitron font-bold text-lg sm:text-xl text-white group-hover:text-[#00F0FF] transition-colors mt-2 mb-3 tracking-wide relative z-10">
                  {t.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 relative z-10 font-normal flex-1">
                  {t.description}
                </p>
              </div>

              {/* Bottom Explore Button */}
              <div className="pt-4 border-t border-white/10 relative z-10 mt-auto">
                <button
                  onClick={() => onSelectTrack(t.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-[#00F0FF] text-slate-300 hover:text-slate-950 border border-white/10 hover:border-[#00F0FF] font-orbitron font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 group/btn transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <span>EXPLORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
