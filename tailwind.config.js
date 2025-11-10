/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'google-blue': '#1a73e8',
        'google-blue-hover': '#1557b0',
        'google-gray': '#5f6368',
        'google-light-gray': '#f8f9fa',
        'google-border': '#dadce0',
        'google-text': '#202124',
        'google-secondary': '#70757a'
      },
      fontFamily: {
        'google': ['Google Sans', 'Roboto', 'Arial', 'sans-serif']
      },
      fontSize: {
        'google-sm': ['14px', '20px'],
        'google-base': ['16px', '24px'],
        'google-lg': ['20px', '28px']
      }
    },
  },
  plugins: [],
}