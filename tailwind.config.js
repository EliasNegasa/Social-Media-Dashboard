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
          dark: '#63687e',
          'very-dark': '#1e202a',
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
    },
  },
  plugins: [],
};
