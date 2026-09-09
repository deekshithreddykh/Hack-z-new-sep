'use client';
import React, { useState, useEffect } from 'react';

export const StatsStrip: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: '17',
    hours: '10',
    mins: '47',
    secs: '45',
  });

  useEffect(() => {
    setMounted(true);
    // Target: September 26, 2026 at 09:30 AM IST (Month index 8 is September)
    const targetDate = new Date(2026, 8, 26, 9, 30, 0).getTime();

    const calculate = () => {
      const now = Date.now();
      const diffInSeconds = Math.max(0, Math.floor((targetDate - now) / 1000));

      const days = Math.floor(diffInSeconds / (3600 * 24));
      const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
      const mins = Math.floor((diffInSeconds % 3600) / 60);
      const secs = diffInSeconds % 60;

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        mins: String(mins).padStart(2, '0'),
        secs: String(secs).padStart(2, '0'),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'DAYS', color: 'text-white' },
    { value: timeLeft.hours, label: 'HOURS', color: 'text-white' },
    { value: timeLeft.mins, label: 'MINUTES', color: 'text-white' },
    { value: timeLeft.secs, label: 'SECONDS', color: 'text-[#00F0FF]' },
  ];

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-2 mb-16 text-center">
      {/* Title Header */}
      <div className="inline-flex items-center gap-3 mb-5">
        <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#00F0FF]" />
        <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#00F0FF] uppercase drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">
          THE BUILD BEGINS IN
        </span>
        <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#00F0FF]" />
      </div>

      {/* 4 Clean Separated Cards */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
        {timeUnits.map((unit, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center p-3.5 sm:p-5 md:p-6 rounded-2xl bg-[#090E1A]/90 border transition-all duration-300 group ${
              idx === 3
                ? 'border-[#00F0FF]/50 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                : 'border-white/10 shadow-lg hover:border-[#00F0FF]/40'
            }`}
          >
            {/* Digit */}
            <span
              className={`font-mono font-black text-2xl sm:text-4xl md:text-5xl leading-none tracking-tight ${unit.color} drop-shadow-md group-hover:scale-105 transition-transform duration-200`}
            >
              {unit.value}
            </span>

            {/* Label */}
            <span className="font-mono text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-2 sm:mt-2.5">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

