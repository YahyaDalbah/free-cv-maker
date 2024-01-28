/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0392F1",
        "hover-blue": "#1368A0",
        "dark-gray": "#8D8888",
        "light-gray": "#ECF0F1",
        "gray-bg": "#656E83",
      },
      height: {
        pdf: "842px",
      },
      width: {
        pdf: "595px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
