import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        display: [
          "FixelGT",
          "FixelDisplay", // Custom font
          "FixelText",
          "sans-serif",   // Fallback
        ],
        sans: [
          "FixelGT",
          "FixelText",
          "sans-serif",   // Fallback
        ],
        serif: [
          "source-serif-4",
          "sans-serif",   // Fallback
        ],
      },
    },
  },
  plugins: [],
};

export default config;
