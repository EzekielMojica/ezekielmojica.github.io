/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "896px",
      xl: "1024px",
    },
    extend: {},
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
