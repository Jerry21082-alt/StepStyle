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
      secondaryColor: "#000000",
      heroColor: "#06142e",
      snow: "#F5F5F5",
      cardBg: "#edede9",
      greenBg: "#008000",
      dangerColor: "#ff0000",
      darkOverlay: "rgba(0,0,0,0.95)",
      lightBlack: '#333333'
    },
    extend: {
      backgroundImage: {
        "hero-img": "/hero.png",
      },
    },
  },
  plugins: [],
};
