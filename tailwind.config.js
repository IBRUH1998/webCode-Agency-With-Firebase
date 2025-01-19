/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      FontFamily: {
        sans: ["inter", "system-ui", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#0F62FE",
        colourBG: "#F2F4F8",
      },
    },
  },
  plugins: [daisyui],
};
