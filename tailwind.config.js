/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "app-350": "#4A499E",
        "app-300": "#6767D9", // Nav Bar Color
        "app-400": "#1d1c44",
        "app-500": "rgb(21 19 52)", // Menu Color
        "app-375": "#2E2D72",
      },
      boxShadow: {
        "light-nav-purple": "0 3px 20px #7127BA", // Navbar
        "light-purple": "0 3px 10px #7127BA", // Menu
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
