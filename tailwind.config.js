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
        cosmicShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        notificationSlide: { // Add this keyframes definition
          from: { opacity: 0, transform: 'translateX(100px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        cosmicShift: 'cosmicShift 15s infinite ease-in-out alternate',
        notificationSlide: 'notificationSlide 1s ease-in-out', // Add this animation definition
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};