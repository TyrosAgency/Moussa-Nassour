/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans'], // Add Montserrat to your font stack
        'paytone-one': ['Paytone One', 'sans-serif'], // Use single quotes for the font name and stack
        'satisfy': ['Satisfy', 'cursive'], // Use single quotes for the font name and stack
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
