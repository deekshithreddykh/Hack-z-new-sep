import React from 'react';
import { Trophy, Medal, Award, Sparkles, Palette, Lightbulb } from 'lucide-react';

export const PrizesSection: React.FC = () => {
  return (
    <section id="prizes" className="py-24 bg-slate-950/80 relative z-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#00F0FF] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#00F0FF]" />
            05 // Rewards Pool
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-orbitron text-white">Compete For The Crown</h2>
          <p className="text-slate-400 mt-3 text-base max-w-xl mx-auto">
            Over ₹50,000+ in cash rewards, gleaming trophies, merit certificates, and incubation support.
          </p>
        </div>

        {/* Podium */}
        <div className="grid md:grid-cols-3 gap-8 items-end mb-16">
          
          {/* 2nd Place */}
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-white/10 text-center flex flex-col items-center backdrop-blur-xl">
            <span className="px-3.5 py-1 rounded-full bg-slate-800 font-mono text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
              02 // 1st Runner Up
            </span>
            <Medal className="w-14 h-14 text-slate-300 mb-3" />
            <h3 className="text-xl font-bold text-white">First Runner Up</h3>
            <div className="text-4xl font-black text-slate-200 mt-3 mb-4">₹ 15,000</div>
            <div className="text-xs text-slate-400 space-y-1">
              <p>+ Official Silver Trophy</p>
              <p>+ Merit Certificates</p>
              <p>+ Tech Swag Goodies</p>
            </div>
          </div>

          {/* 1st Place Champion */}
          <div className="p-10 rounded-3xl bg-gradient-to-b from-slate-900/95 to-slate-950/98 border-2 border-[#00F0FF] text-center flex flex-col items-center shadow-2xl shadow-[#00F0FF]/25 relative md:-translate-y-4">
            <span className="px-4 py-1.5 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/30 font-mono text-xs font-extrabold text-[#00F0FF] uppercase tracking-wider mb-4">
              👑 01 // Grand Champion
            </span>
            <Trophy className="w-16 h-16 text-[#00F0FF] mb-3" />
            <h3 className="text-2xl font-extrabold text-[#00F0FF]">Overall Winner Squad</h3>
            <div className="text-5xl font-black text-white mt-3 mb-4">₹ 25,000</div>
            <div className="text-sm text-slate-300 space-y-1">
              <p>+ Grand Championship Trophy</p>
              <p>+ Winner Badges & Certificates</p>
              <p>+ Fast-Track Project Incubation</p>
              <p>+ Exclusive Campus Honors</p>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="p-8 rounded-3xl bg-slate-900/70 border border-white/10 text-center flex flex-col items-center backdrop-blur-xl">
            <span className="px-3.5 py-1 rounded-full bg-amber-500/15 font-mono text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
              03 // 2nd Runner Up
            </span>
            <Award className="w-14 h-14 text-amber-400 mb-3" />
            <h3 className="text-xl font-bold text-white">Second Runner Up</h3>
            <div className="text-4xl font-black text-amber-400 mt-3 mb-4">₹ 10,000</div>
            <div className="text-xs text-slate-400 space-y-1">
              <p>+ Official Bronze Trophy</p>
              <p>+ Merit Certificates</p>
              <p>+ Swag Kits</p>
            </div>
          </div>

        </div>

        {/* Bounties */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 flex items-center gap-4 hover:border-[#8B5CF6]/40 transition-colors">
            <Sparkles className="w-10 h-10 text-[#8B5CF6] shrink-0" />
            <div>
              <h4 className="text-base font-bold text-white">Best Freshman Squad</h4>
              <p className="font-mono text-sm text-[#8B5CF6] font-semibold mt-1">₹ 3,000 + Badges</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 flex items-center gap-4 hover:border-[#EC4899]/40 transition-colors">
            <Palette className="w-10 h-10 text-[#EC4899] shrink-0" />
            <div>
              <h4 className="text-base font-bold text-white">Best UI/UX Design</h4>
              <p className="font-mono text-sm text-[#EC4899] font-semibold mt-1">₹ 3,000 + Badges</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 flex items-center gap-4 hover:border-[#00F0FF]/40 transition-colors">
            <Lightbulb className="w-10 h-10 text-[#00F0FF] shrink-0" />
            <div>
              <h4 className="text-base font-bold text-white">Most Innovative AI Hack</h4>
              <p className="font-mono text-sm text-[#00F0FF] font-semibold mt-1">₹ 3,000 + Cloud Credits</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
