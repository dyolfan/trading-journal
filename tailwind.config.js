const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      'main-dark': '#212121',
      'main-darker': '#424242',
      main: '#616161',
      'main-lighter': '#757575',
      'main-light': '#9E9E9E',
      'main-white': '#E6E6E6',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
