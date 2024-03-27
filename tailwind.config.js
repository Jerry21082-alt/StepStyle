const { red } = require('@mui/material/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryColor: "#edede9;",
      secondaryColor: "#fe5d26;",
      heroColor: "#06142e",
      snow: "#fff",
      cardBg: "#edede9",
      greenBg: '#008000',
      dangerColor: 'red',
      darkOverlay: 'rgba(0,0,0,0.5)'
    },
    extend: {
      backgroundImage: {
        "hero-img": "/hero.png",
      },
    },
  },
  plugins: [],
};
