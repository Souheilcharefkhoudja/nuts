/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7EC",
        "cream-2": "#F3ECD7",
        "cream-3": "#E7DDC0",
        ink: "#1A1512",
        "ink-2": "#2A2015",
        muted: "#8A8071",
        red: "#D21034",
        "red-2": "#A00B26",
        "red-3": "#6E0716",
        gold: "#B08A45",
        "gold-2": "#8F6E32",
        cocoa: "#3B2415",
      },
      fontFamily: {
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
