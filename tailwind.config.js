/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      ...defaultTheme.screens,
      xs: '475px',
    },
  },
  plugins: [require('flowbite/plugin')],
};
