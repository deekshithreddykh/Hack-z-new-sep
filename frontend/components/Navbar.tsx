'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Domains', href: '#domains' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Rules', href: '#rules' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 transition-all duration-300 pointer-events-none">
      {/* Floating Cyber Glass Pill Capsule */}
      <div 
        className={`max-w-6xl mx-auto px-5 sm:px-8 py-2.5 sm:py-3 rounded-full pointer-events-auto transition-all duration-300 flex items-center justify-between shadow-[0_12px_45px_rgba(0,0,0,0.6)] ${
          scrolled 
            ? 'bg-[#090E1A]/95 backdrop-blur-2xl border border-[#00F0FF]/30 shadow-[0_15px_50px_rgba(0,240,255,0.2)]' 
            : 'bg-[#090E1A]/85 backdrop-blur-xl border border-white/15'
        }`}
      >
        
        {/* Left: Official Transparent HACK Z Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/hackz-logo.png" 
            alt="HACK Z" 
            className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.45)] group-hover:scale-105 transition-transform duration-200" 
          />
        </Link>

        {/* Center: Navigation Links with Tech Display Font */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-display text-[13.5px] xl:text-[14px] font-semibold text-slate-300 hover:text-[#00F0FF] tracking-wide transition-colors relative py-1 group whitespace-nowrap"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] group-hover:w-full transition-all duration-250" />
            </a>
          ))}
        </nav>

        {/* Mid-range screen fallback (md to lg) */}
        <nav className="hidden md:flex lg:hidden items-center gap-4">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-display text-[12.5px] font-semibold text-slate-300 hover:text-[#00F0FF] tracking-wide transition-colors relative py-1 group whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Register Pill Button & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#8B5CF6] text-slate-950 font-display font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#00F0FF]/30 hover:shadow-[#00F0FF]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer whitespace-nowrap"
          >
            <Zap className="w-4 h-4 fill-current text-slate-950" />
            <span>Register</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto bg-[#090E1A]/98 backdrop-blur-2xl border border-[#00F0FF]/30 p-6 rounded-3xl shadow-2xl flex flex-col gap-3 text-center pointer-events-auto">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-base font-bold text-slate-200 hover:text-[#00F0FF] py-1 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenRegister(); }}
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6] text-slate-950 font-display font-bold text-sm shadow-lg shadow-[#00F0FF]/30 mt-2 flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 fill-current text-slate-950" />
            Register Squad Now →
          </button>
        </div>
      )}
    </header>
  );
};

