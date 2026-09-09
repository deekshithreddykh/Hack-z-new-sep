'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface RuleCardData {
  id: string;
  num: string;
  emoji: string;
  title: string;
  description: string;
  bullets: Array<{ text?: string; bold: string; prefix?: string; suffix?: string }>;
}

export const RulesSection: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const generalGuidelines = [
    { prefix: 'This is an ', bold: 'intra-college hackathon exclusively for VIMTECH BCA students', suffix: '.' },
    { prefix: 'All participants must complete their ', bold: 'registration through the official platform', suffix: '.' },
    { prefix: 'Participants may be from ', bold: '1st, 2nd, or 3rd year', suffix: ', and ', bold2: 'cross-year teams are welcome', suffix2: '.' },
    { prefix: 'Each participant can be part of ', bold: 'only one team', suffix: '.' },
    { prefix: 'Teams must maintain ', bold: 'originality, ethical coding practices, and fair play', suffix: ' throughout the hackathon.' },
    { prefix: 'Participants must follow all ', bold: 'event instructions, deadlines, and venue guidelines', suffix: '.' },
    { prefix: 'Teams are expected to ', bold: 'respect fellow participants, mentors, judges, and organizers', suffix: '.' },
  ];

  const ruleCards: RuleCardData[] = [
    {
      id: 'team',
      num: '01',
      emoji: '👥',
      title: 'Team Formation',
      description: 'Form your squad and get ready to build.',
      bullets: [
        { prefix: 'Team size: ', bold: '3–4 members', suffix: ' per team.' },
        { prefix: 'One member must be designated as the ', bold: 'Team Leader', suffix: '.' },
        { prefix: 'Open to ', bold: 'BCA 1st, 2nd, and 3rd year students', suffix: '.' },
        { prefix: '', bold: 'Cross-year teams', suffix: ' are allowed.' },
        { prefix: 'All team members must be ', bold: 'currently enrolled at VIMTECH', suffix: '.' },
        { prefix: '', bold: 'Team changes are not allowed', suffix: ' after registration closes.' }
      ]
    },
    {
      id: 'dev',
      num: '02',
      emoji: '⏱️',
      title: 'Hackathon & Development',
      description: 'Make every minute of the 6-hour sprint count.',
      bullets: [
        { prefix: 'The hackathon will run for ', bold: '6 hours', suffix: ' from the official start time.' },
        { prefix: 'Teams must complete their ', bold: 'development within the hackathon period', suffix: '.' },
        { prefix: 'Follow the announced ', bold: 'timeline, milestones, and deadlines', suffix: '.' },
        { prefix: 'All teams must stop development at the official ', bold: 'code freeze', suffix: '.' },
        { prefix: 'Teams should keep their ', bold: 'working prototype ready for the final submission and demo', suffix: '.' },
        { prefix: 'Late submissions may ', bold: 'not be accepted', suffix: '.' }
      ]
    },
    {
      id: 'tech',
      num: '03',
      emoji: '💻',
      title: 'Technology & AI',
      description: 'Use the tools that help you build better.',
      bullets: [
        { prefix: 'Teams may use ', bold: 'programming languages, frameworks, libraries, APIs, and cloud services', suffix: '.' },
        { prefix: '', bold: 'AI tools and coding assistants are allowed', suffix: '.' },
        { prefix: 'Teams must understand and be able to explain their implementation.', bold: '' },
        { prefix: 'Third-party tools and resources must be used according to their ', bold: 'applicable terms and licenses', suffix: '.' },
        { prefix: 'Technology should contribute meaningfully to the submitted solution.', bold: '' }
      ]
    },
    {
      id: 'sub',
      num: '04',
      emoji: '📤',
      title: 'Submission Guidelines',
      description: 'Build it. Submit it. Be ready to demonstrate it.',
      bullets: [
        { prefix: 'Every team must submit a ', bold: 'working prototype', suffix: '.' },
        { prefix: 'Submit the required ', bold: 'project/repository details', suffix: '.' },
        { prefix: 'All submissions must be completed before the ', bold: 'official deadline', suffix: '.' },
        { prefix: 'Include all required documentation and project information.', bold: '' },
        { prefix: 'Teams must be prepared to ', bold: 'present and demonstrate', suffix: ' their solution.' },
        { prefix: 'Late submissions may ', bold: 'not be accepted', suffix: '.' }
      ]
    },
    {
      id: 'judge',
      num: '05',
      emoji: '🏆',
      title: 'Judging Criteria',
      description: 'Your idea matters. Your execution matters more.',
      bullets: [
        { prefix: '', bold: 'Innovation', suffix: ' — Creativity and originality of the solution.' },
        { prefix: '', bold: 'Problem Relevance', suffix: ' — How effectively the solution addresses a genuine problem.' },
        { prefix: '', bold: 'Technical Implementation', suffix: ' — Effective and appropriate use of technology.' },
        { prefix: '', bold: 'Functionality', suffix: ' — How well the working prototype performs.' },
        { prefix: '', bold: 'User Experience', suffix: ' — Practicality, usability, and ease of use.' },
        { prefix: '', bold: 'Presentation', suffix: " — Clarity of the team's explanation and demonstration." }
      ]
    },
    {
      id: 'conduct',
      num: '06',
      emoji: '⚠️',
      title: 'Code of Conduct',
      description: 'Compete with integrity. Respect the community.',
      bullets: [
        { prefix: 'Treat ', bold: 'teams, mentors, judges, volunteers, and organizers', suffix: ' with respect.' },
        { prefix: '', bold: 'Plagiarism, copied work, or misrepresentation', suffix: ' is not permitted.' },
        { prefix: 'Cheating and other ', bold: 'unfair practices', suffix: ' may result in disqualification.' },
        { prefix: 'Do not interfere with or compromise another team’s project.', bold: '' },
        { prefix: 'Follow all ', bold: 'venue, safety, and event instructions', suffix: '.' },
        { prefix: 'Serious violations may result in ', bold: 'disqualification from the hackathon', suffix: '.' }
      ]
    }
  ];

  return (
    <section id="rules" className="py-24 relative z-10 border-y border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#00F0FF] uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-[#00F0FF]" />
            03 // OFFICIAL RULEBOOK
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-orbitron text-white leading-tight">
            Know the Rules. <span className="gradient-text-electric">Build With Purpose.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed mt-4">
            Everything you need to know before forming your team, building your solution, and presenting it at HACKZ 2026.
          </p>
        </div>

        {/* GENERAL GUIDELINES (ALWAYS VISIBLE STRIP) */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#090E1A]/90 border border-[#00F0FF]/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden">
          {/* Subtle Ambient Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent" />
          
          <div className="flex items-center gap-2.5 font-orbitron text-xs sm:text-sm font-bold text-[#00F0FF] tracking-wider uppercase mb-6">
            <span className="text-base select-none">📌</span>
            <span>GENERAL GUIDELINES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 text-xs sm:text-sm text-slate-300">
            {generalGuidelines.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <span className="text-[#00F0FF] mt-0.5 text-xs select-none">✦</span>
                <span className="text-slate-300">
                  {item.prefix}
                  <strong className="text-white font-semibold">{item.bold}</strong>
                  {item.suffix}
                  {item.bold2 && <strong className="text-white font-semibold">{item.bold2}</strong>}
                  {item.suffix2}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* EXPANDABLE RULE CARDS (RESPONSIVE 2-COLUMN GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start mb-14">
          {ruleCards.map((card) => {
            const isExpanded = !!expandedCards[card.id];

            return (
              <div
                key={card.id}
                className={`p-4 sm:p-5 rounded-2xl bg-[#090E1A]/90 border transition-all duration-300 backdrop-blur-xl relative overflow-hidden ${
                  isExpanded
                    ? 'border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.2)]'
                    : 'border-[#00F0FF]/30 hover:border-[#00F0FF]/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                }`}
              >
                {/* Subtle Ambient Card Top Glow */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00F0FF]/40 to-transparent" />

                {/* Header Row (Clickable Accordion Trigger) */}
                <button
                  onClick={() => toggleCard(card.id)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    {/* Clean Natural Emoji (No box container) */}
                    <div className="text-2xl sm:text-3xl select-none filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] shrink-0 group-hover:scale-110 transition-transform">
                      {card.emoji}
                    </div>

                    <div>
                      <h3 className="font-orbitron font-bold text-base sm:text-lg text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-400 mt-0.5 leading-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Expand/Collapse Toggle Button */}
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 ml-3 transition-all duration-200 ${
                      isExpanded
                        ? 'bg-[#00F0FF] text-slate-950 border-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.5)]'
                        : 'bg-white/5 border-[#00F0FF]/40 text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-slate-950 group-hover:border-[#00F0FF]'
                    }`}
                  >
                    {isExpanded ? <Minus className="w-3.5 h-3.5 stroke-[2.5]" /> : <Plus className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>
                </button>

                {/* Expanded Detailed Rules */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-white/10 animate-in fade-in duration-200">
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {card.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="text-[#00F0FF] mt-1 text-xs select-none">✦</span>
                          <span>
                            {b.prefix}
                            {b.bold && <strong className="text-white font-semibold">{b.bold}</strong>}
                            {b.suffix}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* BOTTOM CLOSING STATEMENT */}
        <div className="text-center pt-8 border-t border-white/10 max-w-2xl mx-auto">
          <h4 className="font-orbitron font-extrabold text-sm sm:text-base tracking-[0.2em] text-[#00F0FF] uppercase mb-2">
            BUILD ORIGINAL. PLAY FAIR. RESPECT THE COMMUNITY.
          </h4>
          <p className="text-slate-400 text-xs sm:text-sm">
            Your work should reflect your ideas, your effort, and your team&apos;s ability to build.
          </p>
        </div>

      </div>
    </section>
  );
};
