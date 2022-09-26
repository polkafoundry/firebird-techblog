/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "640px",
      sm: "768px",
      md: "960px",
      lg: "1280px",
      xl: "1368px",
      "2xl": "1536px",
    },
    colors: {
      "main": "#EB522F",
      ...colors
    },
    extend: {},
  },
  plugins: [],
}
