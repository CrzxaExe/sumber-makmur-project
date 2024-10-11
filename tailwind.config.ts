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
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          800: "#2b2828",
          900: "#1b1919",
        },
        accent: {
          100: "#9e9999",
        },
      },
      fontFamily: {
        valorant: ["var(--font-valorant)"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;
