/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app.html",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#0f172a',
          light: '#your_cosmic_light_color', // Add this line with your desired color
          accent: '#8b5cf6',
          glow: '#a78bfa',
          pulse: '#ff66cc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      keyframes: {
        // ... your existing keyframes ...
      },
      animation: {
        // ... your existing animations ...
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};