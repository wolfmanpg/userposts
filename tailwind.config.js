/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#AA3012',
      'secondary': '#F0C9BF',
      'third': '#B37667',
      'white': '#FFFFFF',
      'black': '#000000',
      'error': '#C90E0E',
      'success': '#1CA513',
    },
  },
  plugins: [],
}
