/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#04060c",
        navy: {
          DEFAULT: "#0a1128",
          light: "#0f1a3a",
          deep: "#060a1a",
        },
        surface: "#0b1120",
        line: "#1c2a4a",
        neon: {
          DEFAULT: "#4da3ff",
          soft: "#7fc4ff",
          bright: "#8fd4ff",
          dim: "#2563a8",
        },
        ink: {
          DEFAULT: "#eef2fb",
          muted: "#8b96b8",
          faint: "#5b6584",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(77, 163, 255, 0.35)",
        "neon-lg": "0 0 60px rgba(77, 163, 255, 0.25)",
        "neon-sm": "0 0 10px rgba(77, 163, 255, 0.45)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(77,163,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(77,163,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
    },
  },
  plugins: [],
};
