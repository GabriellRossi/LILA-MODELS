/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'model': "url('/img/modelo.png')",
      },
      fontFamily: {
        'encode-regular': ['Encode Sans', 'sans-serif'],
        'encode-medium': ['Encode Sans', 'sans-serif'],
        'encode-semiBold': ['Encode Sans', 'sans-serif'],
        'poppins-medium': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
