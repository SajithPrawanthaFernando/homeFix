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
        // Brand Colors
        primary: {
          DEFAULT: "#0EA5E9", // Sky-500: Main brand color (Buttons, Highlights)
          hover: "#0284C7", // Sky-600: Hover state for primary buttons
          light: "#E0F2FE", // Sky-100: Light backgrounds for primary sections
        },
        secondary: {
          DEFAULT: "#0F172A", // Slate-900: Text headings, Footer, Dark backgrounds
          light: "#334155", // Slate-700: Body text
        },
        accent: {
          DEFAULT: "#10B981", // Emerald-500: Success messages, "Verified" badges
        },
        surface: {
          DEFAULT: "#F0F9FF", // Sky-50: Alternating section backgrounds
        },
      },
      fontFamily: {
        // We will set this up in the layout file next
        sans: ["var(--font-inter)", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1280px", // Limiting max-width for better readability on huge screens
        },
      },
    },
  },
  plugins: [],
};
export default config;
