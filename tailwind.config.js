/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lime-green': '#1db489',
        'bright-red': '#dc414c',
        'grayish-blue': {
          light: '#f0f2fa',
          medium: '#e1e3f0',
          dark: '#63687e',
          'very-dark': '#1e202a',
        },
        'desaturated-blue': {
          text: '#8b97c6',
          medium: '#333a56',
          dark: '#252a41',
        },
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      borderWidth: {
        5: '5px',
      },
      fontSize: {
        '4.5xl': '2.75rem',
      },
      screens: {
        md: '821px',
      },
    },
  },
  plugins: [],
};
