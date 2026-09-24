import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      colors: {
        ink: "#0A0A0A",
        paper: "#F4F2ED",
        line: "#242424",
        accent: "#C5F441",
      },
    },
  },
  plugins: [],
};

export default config;
