/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

module.exports = {
  content: [
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      xs: "640px",
      sm: "768px",
      md: "960px",
      lg: "1280px",
      xl: "1368px",
      "2xl": "1536px",
      main: "1440px"
    },
    colors: {
      main: "#EB522F",
      birdGray: "#747474",
      birdPurple: "#6B2FEB",
      birdGreen: "#00CE5F",
      birdOrange: "#FB7800",
      birdRed: "#EB522F",
      birdBlue: "#2F91EB",
      ...colors
    },
    fontFamily: {
      birdMedium: ["TTHoves Medium"],
      birdBold: ["TTHoves Bold"]
    },
    extend: {}
  },
  plugins: []
}
