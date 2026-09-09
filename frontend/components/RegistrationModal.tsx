'use client';
import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ArrowLeft, Printer, Sparkles } from 'lucide-react';
import { TeamRegistration } from '@/lib/types';
import { INITIAL_REGISTRATIONS } from '@/lib/mockData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTrack?: string;
  onRegistered?: (reg: TeamRegistration) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  defaultTrack = 'AI FOR THE FUTURE',
  onRegistered
}) => {
  const [step, setStep] = useState(1);

  // Form State
  const [teamName, setTeamName] = useState('');
  const [domain, setDomain] = useState(defaultTrack);
  const [idea, setIdea] = useState('');

  // Leader
  const [leaderName, setLeaderName] = useState('');
  const [leaderUsn, setLeaderUsn] = useState('');
  const [leaderYear, setLeaderYear] = useState('3rd Year BCA');
  const [leaderSection, setLeaderSection] = useState('Section A');
  const [leaderPhone, setLeaderPhone] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');

  // Members
  const [m2Name, setM2Name] = useState('');
  const [m2Usn, setM2Usn] = useState('');
  const [m2Year, setM2Year] = useState('3rd Year BCA');

  const [m3Name, setM3Name] = useState('');
  const [m3Usn, setM3Usn] = useState('');
  const [m3Year, setM3Year] = useState('3rd Year BCA');

  const [m4Name, setM4Name] = useState('');
  const [m4Usn, setM4Usn] = useState('');
  const [m4Year, setM4Year] = useState('2nd Year BCA');

  // Generated Result
  const [generatedPass, setGeneratedPass] = useState<TeamRegistration | null>(null);

  if (!isOpen) return null;

  const handleNextFromStep1 = () => {
    if (!teamName.trim()) {
      alert('Please enter your Squad / Team Name.');
      return;
    }
    setStep(2);
  };

  const handleNextFromStep2 = () => {
    if (!leaderName.trim() || !leaderUsn.trim() || !leaderPhone.trim() || !leaderEmail.trim()) {
      alert('Please fill in all mandatory Team Leader fields.');
      return;
    }
    setStep(3);
  };

  const handleSubmit = async () => {
    if (!m2Name.trim() || !m2Usn.trim() || !m3Name.trim() || !m3Usn.trim()) {
      alert('Squad must include at least Member 02 and Member 03 with USN.');
      return;
    }

    const members = [
      { name: m2Name.trim(), usn: m2Usn.trim(), year: m2Year },
      { name: m3Name.trim(), usn: m3Usn.trim(), year: m3Year }
    ];

    if (m4Name.trim() && m4Usn.trim()) {
      members.push({ name: m4Name.trim(), usn: m4Usn.trim(), year: m4Year });
    }

    const storedStr = typeof window !== 'undefined' ? localStorage.getItem('hackz_2026_registrations') : null;
    let stored: TeamRegistration[] = INITIAL_REGISTRATIONS;
    if (storedStr) {
      try { stored = JSON.parse(storedStr); } catch (e) { stored = INITIAL_REGISTRATIONS; }
    }

    const regNumber = 40 + stored.length + 1;
    const regId = `HZ26-${String(regNumber).padStart(4, '0')}`;

    const newReg: TeamRegistration = {
      regId,
      teamName: teamName.trim(),
      domain,
      idea: idea.trim(),
      leaderName: leaderName.trim(),
      leaderUsn: leaderUsn.trim(),
      leaderYear,
      leaderSection,
      leaderPhone: leaderPhone.trim(),
      leaderEmail: leaderEmail.trim(),
      membersCount: members.length + 1,
      members,
      status: 'CONFIRMED',
      createdAt: new Date().toISOString()
    };

    stored.push(newReg);
    if (typeof window !== 'undefined') {
      localStorage.setItem('hackz_2026_registrations', JSON.stringify(stored));
    }

    if (onRegistered) onRegistered(newReg);
    setGeneratedPass(newReg);
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#030508]/85 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-2xl bg-slate-950 border border-[#00F0FF]/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-[#00F0FF]/25 relative my-8">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Wizard Progress */}
        <div className="flex justify-between items-center mb-8 relative">
          <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-white/10 -translate-y-1/2 -z-0" />
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex flex-col items-center gap-1.5 relative z-10">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                step === s 
                  ? 'bg-[#00F0FF] text-slate-950 shadow-lg shadow-[#00F0FF]/50 border-2 border-[#00F0FF]' 
                  : step > s 
                    ? 'bg-[#10B981] text-slate-950' 
                    : 'bg-slate-900 border border-white/20 text-slate-400'
              }`}>
                {step > s ? '✓' : s}
              </div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                {s === 1 ? 'Track' : s === 2 ? 'Leader' : s === 3 ? 'Members' : 'Pass'}
              </span>
            </div>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h3 className="text-2xl font-black mb-1">Step 1: Squad & Track</h3>
            <p className="text-sm text-slate-400 mb-6">Enter your team name and select your innovation domain track.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                  Squad / Team Name <span className="text-[#00F0FF]">*</span>
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g. CyberKnights, NullPointers"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] outline-none text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                  Innovation Domain Track <span className="text-[#00F0FF]">*</span>
                </label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] outline-none text-white text-sm"
                >
                  <option value="AI FOR THE FUTURE">🤖 01 — AI FOR THE FUTURE</option>
                  <option value="SOCIAL IMPACT">🤝 02 — SOCIAL IMPACT</option>
                  <option value="SMART CAMPUS">🎓 03 — SMART CAMPUS</option>
                  <option value="AGRICULTURE">🌾 04 — AGRICULTURE</option>
                  <option value="HEALTHCARE">🩺 05 — HEALTHCARE</option>
                  <option value="OPEN INNOVATION">💡 06 — OPEN INNOVATION</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                  Project Synopsis / Idea (Optional)
                </label>
                <textarea
                  rows={3}
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="Briefly describe what solution your team aims to build..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] outline-none text-white text-sm"
                />
              </div>
            </div>

            <div className="flex justify-end mt-8 pt-6 border-t border-white/10">
              <button
                onClick={handleNextFromStep1}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#0284C7] text-slate-950 font-bold text-sm flex items-center gap-2"
              >
                <span>Continue to Leader Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <h3 className="text-2xl font-black mb-1">Step 2: Team Leader Details</h3>
            <p className="text-sm text-slate-400 mb-6">The primary point of contact for official announcements.</p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">Leader Full Name *</label>
                  <input
                    type="text"
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                    placeholder="e.g. Deekshith Reddy"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-[#00F0FF] outline-none text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">College Reg No / USN *</label>
                  <input
                    type="text"
                    value={leaderUsn}
                    onChange={(e) => setLeaderUsn(e.target.value)}
                    placeholder="e.g. U18VT23S0042"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-[#00F0FF] outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">BCA Year *</label>
                  <select
                    value={leaderYear}
                    onChange={(e) => setLeaderYear(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-[#00F0FF] outline-none text-white text-sm"
                  >
                    <option value="1st Year BCA">1st Year BCA</option>
                    <option value="2nd Year BCA">2nd Year BCA</option>
                    <option value="3rd Year BCA">3rd Year BCA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">Section *</label>
                  <select
                    value={leaderSection}
                    onChange={(e) => setLeaderSection(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-[#00F0FF] outline-none text-white text-sm"
                  >
                    <option value="Section A">Section A</option>
                    <option value="Section B">Section B</option>
                    <option value="Section C">Section C</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">WhatsApp Phone *</label>
                  <input
                    type="tel"
                    value={leaderPhone}
                    onChange={(e) => setLeaderPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-[#00F0FF] outline-none text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={leaderEmail}
                    onChange={(e) => setLeaderEmail(e.target.value)}
                    placeholder="e.g. leader@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 focus:border-[#00F0FF] outline-none text-white text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => setStep(1)}
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-slate-300 text-sm flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={handleNextFromStep2}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#0284C7] text-slate-950 font-bold text-sm flex items-center gap-2"
              >
                <span>Continue to Members</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <h3 className="text-2xl font-black mb-1">Step 3: Squad Members</h3>
            <p className="text-sm text-slate-400 mb-6">Total squad size must be 3 to 4 hackers.</p>

            <div className="space-y-4">
              
              {/* Member 2 */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <span className="text-xs font-mono font-bold text-[#00F0FF] block mb-3">MEMBER 02 (Mandatory)</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={m2Name}
                    onChange={(e) => setM2Name(e.target.value)}
                    placeholder="Full Name *"
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs"
                  />
                  <input
                    type="text"
                    value={m2Usn}
                    onChange={(e) => setM2Usn(e.target.value)}
                    placeholder="USN / Reg No *"
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs"
                  />
                  <select
                    value={m2Year}
                    onChange={(e) => setM2Year(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs"
                  >
                    <option value="1st Year BCA">1st Year BCA</option>
                    <option value="2nd Year BCA">2nd Year BCA</option>
                    <option value="3rd Year BCA">3rd Year BCA</option>
                  </select>
                </div>
              </div>

              {/* Member 3 */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <span className="text-xs font-mono font-bold text-[#00F0FF] block mb-3">MEMBER 03 (Mandatory)</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={m3Name}
                    onChange={(e) => setM3Name(e.target.value)}
                    placeholder="Full Name *"
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs"
                  />
                  <input
                    type="text"
                    value={m3Usn}
                    onChange={(e) => setM3Usn(e.target.value)}
                    placeholder="USN / Reg No *"
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs"
                  />
                  <select
                    value={m3Year}
                    onChange={(e) => setM3Year(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs"
                  >
                    <option value="1st Year BCA">1st Year BCA</option>
                    <option value="2nd Year BCA">2nd Year BCA</option>
                    <option value="3rd Year BCA">3rd Year BCA</option>
                  </select>
                </div>
              </div>

              {/* Member 4 */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <span className="text-xs font-mono font-bold text-slate-400 block mb-3">MEMBER 04 (Optional)</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={m4Name}
                    onChange={(e) => setM4Name(e.target.value)}
                    placeholder="Full Name (Optional)"
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs"
                  />
                  <input
                    type="text"
                    value={m4Usn}
                    onChange={(e) => setM4Usn(e.target.value)}
                    placeholder="USN / Reg No"
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs"
                  />
                  <select
                    value={m4Year}
                    onChange={(e) => setM4Year(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs"
                  >
                    <option value="1st Year BCA">1st Year BCA</option>
                    <option value="2nd Year BCA">2nd Year BCA</option>
                    <option value="3rd Year BCA">3rd Year BCA</option>
                  </select>
                </div>
              </div>

            </div>

            <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-slate-300 text-sm flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#0284C7] text-slate-950 font-bold text-sm flex items-center gap-2"
              >
                <span>⚡ Submit & Generate Pass</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: PASS */}
        {step === 4 && generatedPass && (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-3xl font-black text-[#00F0FF] mb-2">Registration Confirmed!</h3>
            <p className="text-sm text-slate-400 mb-6">Your squad has been officially enrolled for HACK Z 2026.</p>

            {/* Rendered Badge */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-[#00F0FF] text-left mb-8 shadow-2xl shadow-[#00F0FF]/20 relative">
              <div className="flex justify-between items-start pb-4 border-b border-dashed border-white/15 mb-4">
                <div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#00F0FF]/15 text-[#00F0FF] font-semibold">
                    OFFICIAL SQUAD PASS
                  </span>
                  <div className="text-2xl font-black font-mono text-white mt-2">{generatedPass.regId}</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">TRACK</span>
                  <span className="font-bold text-sm text-[#00F0FF]">{generatedPass.domain}</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">SQUAD NAME</span>
                <span className="text-xl font-extrabold text-white">{generatedPass.teamName.toUpperCase()}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block uppercase font-mono text-[10px]">LEADER</span>
                  <span className="font-semibold text-white">{generatedPass.leaderName} ({generatedPass.leaderUsn})</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-mono text-[10px]">TEAM SIZE</span>
                  <span className="font-semibold text-white">{generatedPass.membersCount} Hackers</span>
                </div>
              </div>

              <div className="pt-4 border-t border-dashed border-white/15 mt-4 flex justify-between items-center">
                <span className="font-mono text-xs text-[#10B981] font-semibold">STATUS: VERIFIED & CONFIRMED</span>
                <span className="font-mono text-xs text-slate-400">VIMTECH CAMPUS</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => window.print()}
                className="px-6 py-3 rounded-xl bg-[#00F0FF] text-slate-950 font-bold text-sm flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                Print / Save Pass
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/15"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
