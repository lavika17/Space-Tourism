/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#D0D6F9",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlowCondensed: ["Barlow Condensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"]
      }
    },
  },
  plugins: [],
}

