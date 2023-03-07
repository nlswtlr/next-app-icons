/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#11151c",
        secondary: "#212d40",
        ternary: "#364156",
      },
    },
  },
  plugins: [],
};
