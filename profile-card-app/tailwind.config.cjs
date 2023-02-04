/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textGrey: "#BCBCBC",
      },
      fontFamily: {
        main: " 'Kumbh Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
