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
      secondaryColor: "#fe5d26",
      heroColor: "#06142e",
      snow: "#F5F5F5",
      white: "#FFFFFF",
      cardBg: "#edede9",
      greenBg: "#008000",
      dangerColor: "#ff0000",
      darkOverlay: "rgba(0,0,0,0.95)",
      buttonColor: "#403d39",
      black: "#000000",
      gray: "#333333",
    },
    extend: {
      backgroundImage: {
        "hero-img": "/hero.png",
      },
    },
  },
  plugins: [],
};
