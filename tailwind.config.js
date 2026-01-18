/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['cursive', 'sans-serif'], // Fallback for the handwriting font class
      },
      animation: {
        'bounce-gentle': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
};
