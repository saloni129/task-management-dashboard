/** @type {import('tailwindcss').Config} */
// Tailwind CSS v4 compatible configuration
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          650: '#4B5563',
        }
      }
    },
  },
  plugins: [],
}
