import React from 'react';
import { Utensils, Award, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#00F0FF] uppercase tracking-widest mb-3">
          <span className="w-6 h-0.5 bg-[#00F0FF]" />
          01 // The Battleground
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight font-orbitron">
              Not just a hackathon.<br />
              <span className="gradient-text-cyan">A place to turn ideas into impact.</span>
            </h2>
            <p className="text-slate-300 text-lg font-normal leading-relaxed mt-5">
              Organized by the Department of BCA at <strong>Vaisiri Institute of Management & Technology</strong>, HACKZ 2026 brings students together to collaborate, innovate, and build real-world solutions.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mt-4">
              Team up, solve real-world challenges, and turn your ideas into working solutions — all in 6 hours. Collaborate with your squad, experiment with technology, and build something you can proudly showcase. Think creatively, code with purpose, and bring your best ideas to life.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 flex items-start gap-4 hover:border-[#00F0FF]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center text-[#00F0FF] shrink-0">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Free Fuel & Refreshments</h4>
                <p className="text-sm text-slate-400 mt-1">Breakfast, power lunch, snacks, and continuous beverages provided throughout the event.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 flex items-start gap-4 hover:border-[#8B5CF6]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Official Certificate of Merit</h4>
                <p className="text-sm text-slate-400 mt-1">Accredited participation certificates for all registered squad members.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 flex items-start gap-4 hover:border-[#10B981]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981] shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Expert Faculty Mentorship</h4>
                <p className="text-sm text-slate-400 mt-1">Live mid-hack architecture review and guidance to level up your project prototype.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
