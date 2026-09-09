'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who is eligible to participate in HACK Z 2026?',
      a: 'HACK Z 2026 is exclusively open to all BCA students of Vaisiri Institute of Management & Technology (VIMTECH) across 1st Year, 2nd Year, and 3rd Year.'
    },
    {
      q: 'What is the required team size? Can we form mixed-year teams?',
      a: 'Each team must comprise strictly 3 to 4 students. Yes! Cross-year teams (e.g., 1st years pairing with 2nd or 3rd years) are fully permitted and encouraged.'
    },
    {
      q: 'Can we use AI tools (ChatGPT, Claude, Cursor, GitHub Copilot)?',
      a: 'Yes! Modern AI coding assistants and API services are allowed to boost development velocity. However, the architecture, implementation logic, and live presentation must be fully understood by the squad.'
    },
    {
      q: 'Can we bring pre-written code or complete existing projects?',
      a: 'No. All core application code must be written during the 6-hour hackathon sprint. Standard boilerplate templates and open-source libraries are permitted.'
    },
    {
      q: 'Is there any registration fee?',
      a: 'Registration is completely FREE for all VIMTECH BCA students! Food, refreshments, mentorship, and certificates are provided at zero cost.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950/60 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#00F0FF] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#00F0FF]" />
            07 // Got Questions?
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-orbitron text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'bg-slate-900/80 border-[#00F0FF]/50 shadow-lg shadow-[#00F0FF]/10' : 'bg-slate-900/50 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 text-base sm:text-lg font-bold text-white"
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#00F0FF] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#EC4899]' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
