/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'az-black': '#000000',
        'az-turquoise': '#4BC8D8',
        'az-white': '#FFFFFF',
        'az-grey': '#A0A0A0',
        'az-dark': '#111111',
        'az-darker': '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

