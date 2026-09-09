import React from 'react';

export const JudgingSection: React.FC = () => {
  const criteria = [
    { pct: '30%', title: 'Working Prototype', desc: 'How functional, stable, and complete is the live demonstration created within the 6 hours?', color: 'text-[#00F0FF]' },
    { pct: '30%', title: 'Innovation & Originality', desc: 'Is the approach fresh, creative, and distinct from cookie-cutter clone projects?', color: 'text-[#8B5CF6]' },
    { pct: '20%', title: 'Practical Impact', desc: 'Does this solve a real-world problem with feasible scalability and user utility?', color: 'text-[#10B981]' },
    { pct: '20%', title: 'UI/UX & Pitch', desc: 'Clarity of presentation, visual polish, and confidence during jury Q&A.', color: 'text-[#F59E0B]' },
  ];

  return (
    <section id="criteria" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#00F0FF] uppercase tracking-widest mb-3">
              <span className="w-6 h-0.5 bg-[#00F0FF]" />
              06 // Evaluation Matrix
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-orbitron text-white">How Projects Will Be Judged</h2>
          </div>
          <p className="text-slate-400 max-w-md text-base">
            A transparent, merit-driven evaluation framework judged by faculty & external industry experts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((c, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-white/20 backdrop-blur-xl transition-all">
              <span className={`font-mono text-4xl font-extrabold ${c.color}`}>{c.pct}</span>
              <h4 className="text-lg font-bold text-white mt-4 mb-2">{c.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
