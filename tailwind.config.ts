import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Segoe UI", "sans-serif"],
        sans: ["var(--font-inter)", "Segoe UI", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Cascadia Code", "monospace"],
      },
      colors: {
        canvas: "#080A0B",
        panel: "#0E1211",
        raised: "#141917",
        ink: "#F3F5EF",
        muted: "#A7B0A9",
        signal: "#C5F441",
        cyan: "#86D9D1",
        line: "rgba(255, 255, 255, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
