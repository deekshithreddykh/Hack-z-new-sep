import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-[#030509] border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          <div className="md:col-span-6">
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hackz-logo.png" alt="HACK Z" className="h-9 w-auto object-contain" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              <strong className="text-white">Department of Computer Applications (BCA)</strong><br />
              Vaisiri Institute of Management & Technology<br />
              Vidyavahini Group of Institutions, Tumkur<br />
              <span className="text-[#00F0FF] text-xs font-mono font-semibold block mt-1">In association with IQAC • V TECHNO CRATS</span>
            </p>
          </div>

          <div className="md:col-span-3">
            <h5 className="font-mono text-xs font-bold text-[#00F0FF] uppercase tracking-wider mb-4">Quick Navigation</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Hackathon</a></li>
              <li><a href="#tracks" className="hover:text-white transition-colors">Domain Tracks</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Battle Plan</a></li>
              <li><a href="#prizes" className="hover:text-white transition-colors">Prize Pool</a></li>
              <li><Link href="/admin" className="hover:text-[#8B5CF6] transition-colors">Admin Dashboard</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="font-mono text-xs font-bold text-[#00F0FF] uppercase tracking-wider mb-4">Faculty & Contacts</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="mailto:vaisirifirstgradecollege@gmail.com" className="hover:text-white transition-colors">vaisirifirstgradecollege@gmail.com</a></li>
              <li>📞 +91 8217230788</li>
              <li>📞 +91 8217230766</li>
              <li className="text-xs font-semibold text-[#00F0FF] pt-1">VIMTECH Organizing Committee</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>Think Bold. Code Fearless. Change Tomorrow.</div>
          <div>© 2026 HACK Z — VIMTECH BCA Department. All rights reserved.</div>
        </div>

      </div>
    </footer>
  );
};
