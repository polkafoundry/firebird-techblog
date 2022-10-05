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
      md: "900px",
      lg: "1200px",
      xl: "1368px",
      "2xl": "1536px",
      main: "1440px"
    },
    colors: {
      main: "#EB522F",
      birdGray: "#747474",
      birdLightGray: "#f7f7f8",
      birdPurple: "#6B2FEB",
      birdGreen: "#00CE5F",
      birdOrange: "#FB7800",
      birdRed: "#EB522F",
      birdBlue: "#2F91EB",
      ...colors
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.125rem" }], // 12px/18px
      sm: ["0.875rem", { lineHeight: "1.5rem" }], // 14px/24px
      base: ["1rem", { lineHeight: "1.5rem" }], // 16px/24px
      lg: ["1.125rem", { lineHeight: "2rem" }], // 18px/32px
      xl: ["1.25rem", { lineHeight: "2rem" }], // 20px/32px
      "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px/32px
      "3xl": ["1.75rem", { lineHeight: "2.25rem" }], // 28px/36px
      "4xl": ["2.5rem", { lineHeight: "3.25rem" }], // 40px/52px
      "5xl": ["3rem", { lineHeight: "3.75rem" }], // 48px/60px
      "6xl": ["3.5rem", { lineHeight: "4rem" }], // 56px/64px
      "7xl": ["5rem", { lineHeight: "6.25rem" }], // 80px/100px
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
      "22px": ["22px", { lineHeight: "36px" }],
      "10px": ["10px", { lineHeight: "14px" }]
    },

    fontFamily: {
      birdMedium: ["TTHoves Medium"],
      birdBold: ["TTHoves Bold"]
    },
    extend: {}
  },
  plugins: []
}
