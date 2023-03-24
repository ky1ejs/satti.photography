/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "630px",
    },
    fontFamily: {
      base: ["Nobel-Book", "sans-serif"],
    },
    extend: {
      colors: {
        "gray-dark": "#202020",
        primary: "#8EBEFF",
        secondary: "#509AFF",
      },
    },
    keyframes: {
      reset: {
        "0%": { opacity: "0.0" },
        "50%": { opacity: "0.0" },
        "100%": { opacity: "0.0" },
      },
      "fade-in": {
        "0%": { opacity: "0.0" },
        "50%": { opacity: "0.0" },
        "100%": { opacity: "1.0" },
      },
      spin: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
    animation: {
      "fade-in": "reset, fade-in 1s ease-in",
      "fade-in-fast": "reset, fade-in 0.5s linear",
      spin: "spin 1s linear infinite",
    },
  },
  plugins: [],
};
