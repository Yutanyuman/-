import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0b1531",
        forest: "#0f2f24",
        gold: "#c9a75b",
        ivory: "#f4ecd8",
        panel: "#142347",
      },
      boxShadow: {
        pixel: "0 0 0 2px #c9a75b, 0 0 0 4px #0b1531",
      },
      fontFamily: {
        game: ["'Trebuchet MS'", "'Yu Gothic UI'", "sans-serif"],
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
      },
      animation: {
        flicker: "flicker 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
