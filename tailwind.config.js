/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',

  content: ["./**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}