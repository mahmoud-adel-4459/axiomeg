import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#001A3F",
          50: "#E8EEF3",
          100: "#D1DDE7",
          200: "#A3BBCF",
          300: "#7599B7",
          400: "#47779F",
          500: "#102F47",
          600: "#0D2639",
          700: "#0A1C2B",
          800: "#06131D",
          900: "#03090E",
        },
        teal: {
          DEFAULT: "#40C4FF",
          50: "#F2FBFA",
          100: "#E4F7F3",
          200: "#C9EFE7",
          300: "#8CDCCD",
          400: "#5ECBB6",
          500: "#3BB39C",
          600: "#2E8C7B",
        },
        flame: {
          DEFAULT: "#FF6E20",
          50: "#FFF3EB",
          100: "#FFE0CC",
          200: "#FFC199",
          300: "#FF9A5C",
          400: "#FF7A2A",
          500: "#FF6E20",
          600: "#D65A14",
        },
        cyan: {
          DEFAULT: "#40C4FF",
          50: "#EAF8FF",
          400: "#40C4FF",
          500: "#1AAEEF",
        },
        midnight: {
          DEFAULT: "#050C18",
          50: "#0B1524",
          100: "#081422",
        },
        page: "var(--axiom-page)",
        ink: "var(--axiom-ink)",
        honeydew: {
          DEFAULT: "#DDE6E1",
          50: "#F7FAF8",
          100: "#F1F5F3",
          200: "#DDE6E1",
          300: "#C5D3CC",
        },
        surface: {
          DEFAULT: "var(--axiom-surface)",
          muted: "var(--axiom-muted)",
          subtle: "var(--axiom-muted)",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 5vw, 4.75rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "600" }],
        "heading-1": ["clamp(2rem, 3.4vw, 3.25rem)", { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "600" }],
        "heading-2": ["clamp(1.5rem, 2.4vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "heading-3": ["clamp(1.25rem, 1.6vw, 1.5rem)", { lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "600" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        axiom: "0.75rem",
        "axiom-lg": "1.25rem",
        "axiom-xl": "1.75rem",
      },
      boxShadow: {
        "axiom-sm": "0 1px 2px rgba(16, 47, 71, 0.06)",
        axiom: "0 10px 30px -12px rgba(16, 47, 71, 0.12)",
        "axiom-lg": "0 24px 50px -20px rgba(16, 47, 71, 0.16)",
        "axiom-glow": "0 0 0 4px rgba(140, 220, 205, 0.35)",
      },
      maxWidth: {
        container: "76rem",
        narrow: "48rem",
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(to right, rgba(16,47,71,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,47,71,0.06) 1px, transparent 1px)",
        "hero-light":
          "radial-gradient(1200px 500px at 80% -10%, rgba(140,220,205,0.45), transparent 60%), radial-gradient(900px 400px at 0% 100%, rgba(236,78,32,0.08), transparent 50%), linear-gradient(180deg, #F7FAF8 0%, #FFFFFF 45%, #DDE6E1 100%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      transitionTimingFunction: {
        axiom: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
