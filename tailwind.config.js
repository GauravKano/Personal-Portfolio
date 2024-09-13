const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "app-350": "#4A499E",
        "app-300": "#6767D9", // Nav Bar Color
        "app-400": "#1d1c44",
        "app-500": "rgb(21 19 52)", // Menu Color
      },
      boxShadow: {
        "light-nav-purple": "0 3px 20px #7127BA", // Navbar
        "light-purple": "0 3px 10px #7127BA", // Menu
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        popOut: {
          "0%": { transform: "scale(0)", opacity: "0%" },
          "80%": { opacity: "100%" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "slide-right-in": "slideIn 500ms ease-out forwards",
        "slide-right-out": "slideOut 500ms ease-in forwards",
        popOut: "popOut 400ms ease-out forwards",
      },
      spacing: {
        "10p": "10%",
        "12p": "12%",
        26: "6.5rem",
      },
      screens: {
        tall: { raw: "(min-height: 900px)" },
      },
    },
  },
  plugins: [],
};
