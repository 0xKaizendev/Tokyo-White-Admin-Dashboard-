/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        perso: ['Roboto', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'bleu': '#1A75FF',
        'black': '#242E6F',
        'vert': '#44D600',
        'orange': '#F49200',
        'gray': '#6E759F',
        'white': '#FFFFFF',
        'secondary': '#F6F8FB',
      },
    },
  },

  plugins: [
    require("flowbite/plugin")
  ],
})