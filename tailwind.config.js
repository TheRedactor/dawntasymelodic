/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app.html",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./views/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        cosmic: {
          dark: '#0f172a',
          light: '#334155',
          accent: '#8b5cf6',
          glow: '#a78bfa',
          pulse: '#ff66cc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'messageAiFadeIn': 'messageAiFadeIn 0.3s ease-out',
        'messageUserFadeIn': 'messageUserFadeIn 0.3s ease-out',
        'notificationSlide': 'notificationSlide 0.5s ease-out',
        'shake': 'shake 0.6s ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  safelist: [
    'space-y-3',
    'space-y-4',
    'space-y-5',
    'space-y-6',
    'space-x-3',
    'space-x-4', 
    'space-x-5',
    'bg-cosmic-pulse',
    'text-cosmic-pulse',
  ]
};