import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        federation: {
          navy: "#0a192f",
          dark: "#070e1b",
          primary: "#142c52",
          accent: "#d97706",
          gold: "#f59e0b",
          lightGold: "#fef3c7",
          crimson: "#b91c1c",
          surface: "#0f223f",
          card: "#122849",
          border: "#1e3a6a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
