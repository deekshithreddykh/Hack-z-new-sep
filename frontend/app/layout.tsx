import type { Metadata } from 'next';
import { Space_Grotesk, Outfit, JetBrains_Mono, Orbitron } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HACK Z 2026 — VIMTECH Intra-College Hackathon | BCA Department',
  description: '6-Hour High-Octane Intra-College Hackathon exclusively for BCA students at Vaisiri Institute of Management & Technology (VIMTECH), Tumkur. Think Bold. Code Fearless. Forge Tomorrow.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable} ${orbitron.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#05070B] text-white antialiased font-sans">
        <div className="bg-cyber-grid" />
        <div className="fixed top-[5%] left-[15%] w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none opacity-30 bg-gradient-to-tr from-[#00F0FF]/30 to-transparent animate-float-orb" />
        <div className="fixed top-[35%] right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-25 bg-gradient-to-tr from-[#8B5CF6]/30 to-transparent animate-float-orb [animation-delay:-6s]" />
        {children}
      </body>
    </html>
  );
}
