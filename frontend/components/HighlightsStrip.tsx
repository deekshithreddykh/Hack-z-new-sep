'use client';
import React from 'react';

export const HighlightsStrip: React.FC = () => {
  const highlights = [
    {
      number: '6',
      title: 'HOURS',
      subtitle: 'Build. Test. Ship.',
    },
    {
      number: '3–4',
      title: 'MEMBERS',
      subtitle: 'One Team. One Idea.',
    },
    {
      number: '6',
      title: 'DOMAINS',
      subtitle: 'Find Your Challenge.',
    },
    {
      number: 'ALL',
      title: 'BCA YEARS',
      subtitle: '1st • 2nd • 3rd Year',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20">
      <div className="rounded-3xl bg-[#090E1A]/90 border border-white/10 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
        
        {/* Subtle ambient lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/5 via-transparent to-[#8B5CF6]/5 pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative z-10">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-2 sm:px-4 lg:px-6 ${
                idx !== highlights.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              {/* Main Heading on ONE single line with glowing number highlight */}
              <div className="flex items-center justify-center mb-2.5 whitespace-nowrap flex-nowrap">
                <span className="font-orbitron font-extrabold text-[22px] sm:text-[26px] lg:text-[28px] tracking-wide leading-none">
                  <span className="text-[#00F0FF] drop-shadow-[0_0_15px_rgba(0,240,255,0.8)] mr-2">
                    {item.number}
                  </span>
                  <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    {item.title}
                  </span>
                </span>
              </div>

              {/* Supporting Text */}
              <p className="font-mono text-[13px] sm:text-[14px] font-medium tracking-wide text-slate-400 mt-1 whitespace-nowrap">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
