'use client';
import React from 'react';
import { Sparkles, Zap, Trophy, Flame, Code2, Award, Cpu } from 'lucide-react';

export const CyberMarquee: React.FC = () => {
  const items = [
    { text: '₹50,000+ TOTAL PRIZE POOL', icon: Trophy, color: 'text-[#00F0FF]' },
    { text: '6-HOUR RAPID CODE SPRINT', icon: Zap, color: 'text-[#38BDF8]' },
    { text: '6 REAL-WORLD DOMAIN TRACKS', icon: Cpu, color: 'text-[#8B5CF6]' },
    { text: 'BCA 1st • 2nd • 3rd YEAR SQUADS', icon: Flame, color: 'text-[#EC4899]' },
    { text: 'ACCREDITED MERIT CERTIFICATES', icon: Award, color: 'text-[#10B981]' },
    { text: 'FREE FOOD & POWER REFRESHMENTS', icon: Sparkles, color: 'text-[#F59E0B]' },
    { text: 'EXPERT FACULTY & INDUSTRY MENTORS', icon: Code2, color: 'text-[#00F0FF]' },
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-[#00F0FF]/10 via-[#8B5CF6]/10 to-[#00F0FF]/10 border-y border-[#00F0FF]/25 py-3 relative z-20 backdrop-blur-md">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold tracking-wider text-slate-200">
              <Icon className={`w-4 h-4 ${item.color}`} />
              <span className="text-white">{item.text}</span>
              <span className="text-slate-600 font-normal">///</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
