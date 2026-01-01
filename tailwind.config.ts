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
        retro: {
          orange: '#FF6B35',
          yellow: '#F7B538',
          brown: '#8B4513',
          cream: '#FFF8DC',
          purple: '#9B59B6',
          teal: '#20B2AA',
        }
      },
      fontFamily: {
        'funky': ['Comic Sans MS', 'cursive', 'sans-serif'],
        'retro': ['Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
};
export default config;
