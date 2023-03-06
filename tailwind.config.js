/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "600px",
    },
    fontFamily: {
      base: ["Nobel-Book", "sans-serif"],
    },
    extend: {
      colors: {
        "gray-dark": "#202020",
        primary: "#9c57eb",
      },
    },
  },
  plugins: [],
};
