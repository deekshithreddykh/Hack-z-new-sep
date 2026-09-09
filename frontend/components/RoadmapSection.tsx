'use client';
import React from 'react';
import { Flag, Calendar, Rocket, Users, Code, CheckCircle, Upload, Trophy, Activity, Sparkles } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const steps = [
    {
      badge: 'PHASE 01 // REGISTRATION',
      time: 'APRIL 1, 2026',
      title: 'Registrations Open',
      desc: 'Sign-ups go live on the official portal. Form your squad, choose your domain track, and lock in your entry early.',
      icon: <Flag className="w-4 h-4 text-white" />,
      glow: 'shadow-[0_0_20px_rgba(56,189,248,0.7)] bg-gradient-to-tr from-[#0284C7] to-[#38BDF8]',
      border: 'border-[#38BDF8]/40 hover:border-[#38BDF8]'
    },
    {
      badge: 'PHASE 02 // DEADLINE',
      time: 'APRIL 4, 2026',
      title: 'Registrations Close',
      desc: 'Final registration window closes. Team rosters lock and no further member additions or changes are permitted.',
      icon: <Calendar className="w-4 h-4 text-white" />,
      glow: 'shadow-[0_0_20px_rgba(139,92,246,0.7)] bg-gradient-to-tr from-[#6D28D9] to-[#8B5CF6]',
      border: 'border-[#8B5CF6]/40 hover:border-[#8B5CF6]'
    },
    {
      badge: 'PHASE 03 // CONFIRMATION',
      time: 'APRIL 7, 2026',
      title: 'Team Confirmation & Briefing',
      desc: 'Confirmed team passes issued with USN validation, problem statement briefing packet, and event-day prep guides shared.',
      icon: <CheckCircle className="w-4 h-4 text-white" />,
      glow: 'shadow-[0_0_20px_rgba(6,182,212,0.7)] bg-gradient-to-tr from-[#0891B2] to-[#06B6D4]',
      border: 'border-[#06B6D4]/40 hover:border-[#06B6D4]'
    },
    {
      badge: 'HACKATHON DAY // 09:30 AM',
      time: 'APRIL 10, 2026 — 09:30 AM',
      title: '🚀 Hack-Z Kickoff & Sprint Commences',
      desc: 'Opening ceremony at VIMTECH Campus. Welcome address by dignitaries, challenge reveal, and the 6-hour development sprint begins!',
      icon: <Rocket className="w-4 h-4 text-white" />,
      glow: 'shadow-[0_0_25px_rgba(0,240,255,0.9)] bg-gradient-to-tr from-[#00F0FF] to-[#38BDF8]',
      border: 'border-[#00F0FF]/60 hover:border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.15)]'
    },
    {
      badge: 'CHECKPOINT 1 // 11:30 AM',
      time: 'APRIL 10, 2026 — 11:30 AM',
      title: '1st Mentorship Check-in: Architecture Review',
      desc: 'Faculty & expert mentors visit every team table to inspect architecture flow, validate tech stack feasibility, and give early feedback.',
      icon: <Code className="w-4 h-4 text-white" />,
      glow: 'shadow-[0_0_20px_rgba(245,158,11,0.7)] bg-gradient-to-tr from-[#D97706] to-[#F59E0B]',
      border: 'border-[#F59E0B]/40 hover:border-[#F59E0B]'
    },
    {
      badge: 'CHECKPOINT 2 // 01:45 PM',
      time: 'APRIL 10, 2026 — 01:45 PM',
      title: '2nd Mentorship Check-in: Mid-Sprint Progress',
      desc: 'Mid-sprint checkpoint post-lunch to review core feature progress, working database integration, and unblock critical technical roadblocks.',
      icon: <Activity className="w-4 h-4 text-white" />,
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.7)] bg-gradient-to-tr from-[#9333EA] to-[#A855F7]',
      border: 'border-[#A855F7]/40 hover:border-[#A855F7]'
    },
    {
      badge: 'CHECKPOINT 3 // 03:30 PM',
      time: 'APRIL 10, 2026 — 03:30 PM',
      title: '3rd Final Check & Code Freeze Submission',
      desc: 'Hands off keyboards! Final code pushes to GitHub repository, working prototype validation, and project summary submitted to jury.',
      icon: <Upload className="w-4 h-4 text-white" />,
      glow: 'shadow-[0_0_20px_rgba(236,72,153,0.7)] bg-gradient-to-tr from-[#DB2777] to-[#EC4899]',
      border: 'border-[#EC4899]/40 hover:border-[#EC4899]'
    },
    {
      badge: 'GRAND FINALE // 04:00 PM',
      time: 'APRIL 10, 2026 — 04:00 PM – 05:30 PM',
      title: 'Live Jury Demos, Results & Victory Ceremony',
      desc: 'Live 3-min pitch + 2-min demo in front of jury panel, followed by crowning of Champions, Cash Prizes, and certificate distribution!',
      icon: <Trophy className="w-4 h-4 text-white" />,
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.9)] bg-gradient-to-tr from-[#059669] to-[#10B981]',
      border: 'border-[#10B981]/60 hover:border-[#10B981] shadow-[0_0_25px_rgba(16,185,129,0.18)]'
    }
  ];

  return (
    <section id="schedule" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#00F0FF] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#00F0FF]" />
            04 // EVENT TIMELINE
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-orbitron text-white">
            Event Timeline & <span className="gradient-text-electric">Roadmap</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base max-w-xl mx-auto leading-relaxed">
            From registration to final results — the complete journey of HACKZ 2026.
          </p>
        </div>

        {/* Alternating Center Timeline */}
        <div className="relative">
          
          {/* Vertical Center Neon Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#00F0FF] via-[#8B5CF6] to-[#10B981] shadow-[0_0_12px_rgba(0,240,255,0.6)]" />

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-14">
            {steps.map((s, idx) => {
              const isEven = idx % 2 === 0; // Left side on desktop

              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Content Card */}
                  <div className="w-full pl-14 md:pl-0 md:w-[calc(50%-2.5rem)]">
                    <div 
                      className={`p-6 sm:p-7 rounded-2xl bg-[#090E1A]/90 backdrop-blur-xl border transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${s.border}`}
                    >
                      {/* Subtle Top Gradient Line */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 font-mono text-[11px] sm:text-xs font-bold text-[#00F0FF] uppercase tracking-wider">
                          {s.time}
                        </span>
                      </div>

                      <h4 className="font-orbitron font-bold text-lg sm:text-xl text-white mb-2 tracking-wide">
                        {s.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Icon on Line */}
                  <div 
                    className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-20 border-2 border-[#05070B] ${s.glow}`}
                  >
                    {s.icon}
                  </div>

                  {/* Empty Spacer Column for Desktop Balance */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
