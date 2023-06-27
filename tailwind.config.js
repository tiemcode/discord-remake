/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend:{
      colors:{
        'brand': '#5865f2',
        'brand-gradient': '#7289da',
        'brand-gray':'#23272a'
      }
    }
  },
  plugins: [],
}