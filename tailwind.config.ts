import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#0fb9b1",
          cyan: "#00d1d1",
          orange: "#ff7a18",
          charcoal: "#0f172a",
          slate: "#1f2937",
        },
      },
      boxShadow: {
        glow: "0 10px 60px rgba(15, 185, 177, 0.25)",
      },
      backgroundImage: {
        'hero-gradient': "radial-gradient(circle at 20% 20%, rgba(15,185,177,0.18), transparent 35%), radial-gradient(circle at 80% 0%, rgba(0,209,209,0.2), transparent 30%), linear-gradient(120deg, rgba(15,185,177,0.25), rgba(255,122,24,0.18))",
      },
    },
  },
  plugins: [typography],
};

export default config;
