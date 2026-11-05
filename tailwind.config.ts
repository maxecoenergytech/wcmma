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
      /* Stripe-inspired design tokens (WCMAA dark premium identity) */
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        display: "-0.03em",
      },
      boxShadow: {
        /* Hairline-bordered, softly elevated surfaces (Stripe card treatment) */
        card:
          "0 1px 2px rgba(2, 6, 23, 0.35), 0 0 0 1px rgba(148, 163, 184, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.035)",
        "card-hover":
          "0 12px 40px -16px rgba(2, 6, 23, 0.6), 0 0 0 1px rgba(148, 163, 184, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        /* Primary pill CTA (amber glow, inner top light) */
        btn: "0 2px 12px -2px rgba(245, 158, 11, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
        /* Floating navigation surfaces */
        nav: "0 12px 40px -20px rgba(2, 6, 23, 0.65)",
      },
    },
  },
  plugins: [],
};
export default config;
