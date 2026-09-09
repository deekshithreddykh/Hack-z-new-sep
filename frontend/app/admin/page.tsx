'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, Search, Users, ShieldCheck, Database, Eye, X, CheckCircle, Code } from 'lucide-react';
import { TeamRegistration } from '@/lib/types';
import { INITIAL_REGISTRATIONS } from '@/lib/mockData';

export default function AdminPage() {
  const [registrations, setRegistrations] = useState<TeamRegistration[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [domainFilter, setDomainFilter] = useState('ALL');
  const [selectedTeam, setSelectedTeam] = useState<TeamRegistration | null>(null);
  const [showSqlModal, setShowSqlModal] = useState(false);
  const [showConfigDrawer, setShowConfigDrawer] = useState(false);
  
  const [supabaseUrl, setSupabaseUrl] = useState('');
  const [supabaseKey, setSupabaseKey] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('hackz_2026_registrations');
    if (stored) {
      try {
        setRegistrations(JSON.parse(stored));
      } catch (e) {
        setRegistrations(INITIAL_REGISTRATIONS);
      }
    } else {
      setRegistrations(INITIAL_REGISTRATIONS);
      localStorage.setItem('hackz_2026_registrations', JSON.stringify(INITIAL_REGISTRATIONS));
    }

    setSupabaseUrl(localStorage.getItem('hackz_supabase_url') || '');
    setSupabaseKey(localStorage.getItem('hackz_supabase_key') || '');
  }, []);

  const totalHackers = registrations.reduce((acc, r) => acc + (r.membersCount || 4), 0);

  const filteredRegistrations = registrations.filter((r) => {
    const matchQuery =
      r.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.regId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.leaderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.leaderUsn.toLowerCase().includes(searchQuery.toLowerCase());
    const matchDomain = domainFilter === 'ALL' || r.domain === domainFilter;
    return matchQuery && matchDomain;
  });

  const exportCSV = () => {
    if (!registrations.length) {
      alert('No registration data available.');
      return;
    }

    let csv = 'Registration ID,Team Name,Domain Track,Leader Name,Leader USN,Leader Year,Leader Section,Leader Phone,Leader Email,Members Count,Member 2,Member 3,Member 4,Status,Registered Date\n';

    registrations.forEach((r) => {
      const m2 = r.members[0] ? `${r.members[0].name} (${r.members[0].usn})` : '';
      const m3 = r.members[1] ? `${r.members[1].name} (${r.members[1].usn})` : '';
      const m4 = r.members[2] ? `${r.members[2].name} (${r.members[2].usn})` : '';

      csv += `"${r.regId}","${r.teamName}","${r.domain}","${r.leaderName}","${r.leaderUsn}","${r.leaderYear}","${r.leaderSection}","${r.leaderPhone}","${r.leaderEmail}",${r.membersCount},"${m2}","${m3}","${m4}","${r.status}","${r.createdAt}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `HACK_Z_2026_Teams_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const saveSupabaseConfig = () => {
    if (!supabaseUrl.trim() || !supabaseKey.trim()) {
      alert('Please enter both Supabase URL and Anon Key.');
      return;
    }
    localStorage.setItem('hackz_supabase_url', supabaseUrl.trim());
    localStorage.setItem('hackz_supabase_key', supabaseKey.trim());
    alert('Supabase credentials saved successfully!');
    setShowConfigDrawer(false);
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#00F0FF] mb-2 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Public Portal
            </Link>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black">HACK Z Organizer Suite</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/30 font-mono text-xs font-bold">
                ADMIN
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowConfigDrawer(!showConfigDrawer)}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-white/15 text-slate-300 text-xs font-semibold hover:border-[#00F0FF] transition-all flex items-center gap-2"
            >
              <Database className="w-4 h-4 text-[#00F0FF]" />
              <span>Supabase / Cloud Sync</span>
            </button>

            <button
              onClick={exportCSV}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#0284C7] text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-[#00F0FF]/25 hover:shadow-[#00F0FF]/40 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV / Excel</span>
            </button>
          </div>
        </div>

        {/* Supabase Config Drawer */}
        {showConfigDrawer && (
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-[#00F0FF]/40 mb-8 backdrop-blur-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#00F0FF]">Supabase PostgreSQL Configuration</h3>
                <p className="text-xs text-slate-400">Connect your Supabase project to automatically sync registrations to cloud storage.</p>
              </div>
              <button 
                onClick={() => setShowSqlModal(true)}
                className="text-xs font-mono text-[#8B5CF6] hover:underline flex items-center gap-1"
              >
                <Code className="w-3.5 h-3.5" />
                View SQL Schema
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                value={supabaseUrl}
                onChange={(e) => setSupabaseUrl(e.target.value)}
                placeholder="Supabase Project URL (e.g. https://xyz.supabase.co)"
                className="px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs outline-none focus:border-[#00F0FF]"
              />
              <input
                type="password"
                value={supabaseKey}
                onChange={(e) => setSupabaseKey(e.target.value)}
                placeholder="Supabase Anon / Public API Key"
                className="px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs outline-none focus:border-[#00F0FF]"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfigDrawer(false)}
                className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 text-xs"
              >
                Cancel
              </button>
              <button
                onClick={saveSupabaseConfig}
                className="px-5 py-2 rounded-lg bg-[#00F0FF] text-slate-950 font-bold text-xs"
              >
                Save & Connect
              </button>
            </div>
          </div>
        )}

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-xl">
            <span className="text-3xl font-black text-[#00F0FF]">{registrations.length}</span>
            <span className="text-xs text-slate-400 uppercase font-mono block mt-1">Total Squads</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-xl">
            <span className="text-3xl font-black text-[#8B5CF6]">{totalHackers}</span>
            <span className="text-xs text-slate-400 uppercase font-mono block mt-1">Total Hackers</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-xl">
            <span className="text-3xl font-black text-[#10B981]">
              {(totalHackers / Math.max(1, registrations.length)).toFixed(1)}
            </span>
            <span className="text-xs text-slate-400 uppercase font-mono block mt-1">Avg Team Size</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-xl">
            <span className="text-3xl font-black text-[#F59E0B]">{registrations.length}</span>
            <span className="text-xs text-slate-400 uppercase font-mono block mt-1">Registrations Today</span>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Team, Leader USN, Reg ID..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white outline-none focus:border-[#00F0FF]"
            />
          </div>

          <select
            value={domainFilter}
            onChange={(e) => setDomainFilter(e.target.value)}
            className="w-full sm:w-64 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white outline-none focus:border-[#00F0FF]"
          >
            <option value="ALL">All Domain Tracks</option>
            <option value="AI & Autonomous Agents">AI & Autonomous Agents</option>
            <option value="Smart Campus & EdTech">Smart Campus & EdTech</option>
            <option value="AgriTech & Rural Tech">AgriTech & Rural Tech</option>
            <option value="MedTech & Healthcare">MedTech & Healthcare</option>
            <option value="Smart Cities & Green Tech">Smart Cities & Green Tech</option>
            <option value="Open Innovation & Wildcard">Open Innovation & Wildcard</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 bg-slate-900/90 text-slate-400 font-mono uppercase tracking-wider">
                <th className="p-4">Reg ID</th>
                <th className="p-4">Squad Name</th>
                <th className="p-4">Domain Track</th>
                <th className="p-4">Leader (USN)</th>
                <th className="p-4">Squad Size</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredRegistrations.map((r) => (
                <tr key={r.regId} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-mono font-bold text-[#00F0FF]">{r.regId}</td>
                  <td className="p-4 font-bold text-white">{r.teamName}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded bg-white/5 font-mono text-[11px] text-slate-300">
                      {r.domain}
                    </span>
                  </td>
                  <td className="p-4">
                    <div>{r.leaderName}</div>
                    <span className="font-mono text-[11px] text-slate-400">{r.leaderUsn}</span>
                  </td>
                  <td className="p-4">{r.membersCount} Hackers</td>
                  <td className="p-4 font-mono text-slate-300">{r.leaderPhone}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] font-mono text-[10px] font-bold">
                      CONFIRMED
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => setSelectedTeam(r)}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Inspect
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Team Detail Modal */}
      {selectedTeam && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-slate-950 border border-white/20 rounded-3xl p-6 sm:p-8 relative">
            <button 
              onClick={() => setSelectedTeam(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#8B5CF6]/20 text-[#8B5CF6] font-bold">
              {selectedTeam.regId}
            </span>

            <h3 className="text-2xl font-black mt-2">{selectedTeam.teamName}</h3>
            <span className="text-xs font-semibold text-[#00F0FF] block mb-6">{selectedTeam.domain}</span>

            <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 mb-4">
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Squad Leader</span>
              <div className="text-base font-bold text-white">{selectedTeam.leaderName}</div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">
                {selectedTeam.leaderUsn} • {selectedTeam.leaderYear} • {selectedTeam.leaderSection}
              </div>
              <div className="text-xs text-[#00F0FF] mt-2">
                📞 {selectedTeam.leaderPhone} | ✉️ {selectedTeam.leaderEmail}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 mb-6">
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-2">Squad Members</span>
              <div className="space-y-2">
                {selectedTeam.members.map((m, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs p-2 rounded-lg bg-white/5">
                    <span><strong>Member 0{idx + 2}:</strong> {m.name}</span>
                    <span className="font-mono text-slate-400">{m.usn} ({m.year})</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedTeam(null)}
              className="w-full py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs"
            >
              Close Details
            </button>
          </div>
        </div>
      )}

      {/* SQL Schema Modal */}
      {showSqlModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-slate-950 border border-white/20 rounded-3xl p-6 sm:p-8 relative">
            <button 
              onClick={() => setShowSqlModal(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-[#00F0FF] mb-2">PostgreSQL Supabase Table Setup</h3>
            <p className="text-xs text-slate-400 mb-4">Copy and execute this script in your Supabase SQL Editor:</p>

            <pre className="p-4 rounded-xl bg-[#04060A] border border-white/10 text-[11px] font-mono text-[#A5F3FC] overflow-x-auto max-h-72">
{`-- HACK Z 2026 Supabase Schema
CREATE TABLE IF NOT EXISTS public.registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_id TEXT UNIQUE NOT NULL,
  team_name TEXT NOT NULL,
  domain TEXT NOT NULL,
  project_idea TEXT,
  leader_name TEXT NOT NULL,
  leader_usn TEXT NOT NULL,
  leader_year TEXT NOT NULL,
  leader_section TEXT NOT NULL,
  leader_phone TEXT NOT NULL,
  leader_email TEXT NOT NULL,
  members_count INT NOT NULL DEFAULT 3,
  members JSONB NOT NULL DEFAULT '[]'::jsonb,
  status TEXT NOT NULL DEFAULT 'CONFIRMED',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can register squads" 
ON public.registrations FOR INSERT WITH CHECK (true);

CREATE POLICY "Public and Admin can view squads" 
ON public.registrations FOR SELECT USING (true);`}
            </pre>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`CREATE TABLE IF NOT EXISTS public.registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_id TEXT UNIQUE NOT NULL,
  team_name TEXT NOT NULL,
  domain TEXT NOT NULL,
  project_idea TEXT,
  leader_name TEXT NOT NULL,
  leader_usn TEXT NOT NULL,
  leader_year TEXT NOT NULL,
  leader_section TEXT NOT NULL,
  leader_phone TEXT NOT NULL,
  leader_email TEXT NOT NULL,
  members_count INT NOT NULL DEFAULT 3,
  members JSONB NOT NULL DEFAULT '[]'::jsonb,
  status TEXT NOT NULL DEFAULT 'CONFIRMED',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);`);
                  alert('SQL Schema copied to clipboard!');
                }}
                className="px-4 py-2 rounded-xl bg-[#00F0FF] text-slate-950 font-bold text-xs"
              >
                Copy SQL Script
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
