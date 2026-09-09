import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070B",
        card: "rgba(11, 17, 30, 0.75)",
        elevated: "#0B1220",
        electric: {
          cyan: "#00F0FF",
          sky: "#38BDF8",
          violet: "#8B5CF6",
          purple: "#A855F7",
          pink: "#EC4899",
          emerald: "#10B981",
          amber: "#F59E0B"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-orbitron)", "sans-serif"],
        space: ["var(--font-space)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        'cyan-glow': "0 0 25px -2px rgba(0, 240, 255, 0.4)",
        'violet-glow': "0 0 25px -2px rgba(139, 92, 246, 0.4)",
      }
    },
  },
  plugins: [],
};
export default config;
