/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gryffindor: '#740001',
        gold: '#d4af37',
        magicBlack: '#0b0d0f',
      },
    },
  },
  plugins: [],
}