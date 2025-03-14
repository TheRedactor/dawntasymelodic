/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderWidth: {
        3: '3px', // Add custom border width for `border-3`
      },
      colors: {
        // The cosmic void - deep space colors
        void: {
          50: '#e0e1ff',
          100: '#c1c3ff',
          200: '#9598ff',
          300: '#6a6df4',
          400: '#4d4fdb',
          500: '#3333c2',
          600: '#2b28a9',
          700: '#221e90',
          800: '#191577',
          900: '#0d0d3d',
          950: '#06061f',
        },
        // Starlight - luminous accent colors
        starlight: {
          50: '#f9f9ff',
          100: '#f1f1ff',
          200: '#e1e1ff',
          300: '#c4c5ff',
          400: '#a3a5ff',
          500: '#8185ff',
          600: '#6163ff',
          700: '#5050ff',
          800: '#3d3df4',
          900: '#2a2adb',
        },
        // Time - representing the clock theme from Dawntasy
        time: {
          50: '#fff1fa',
          100: '#ffe5f6',
          200: '#ffc6ec',
          300: '#ff9ddd',
          400: '#ff5c92',
          500: '#ff3a70',
          600: '#ef234c',
          700: '#db1932',
          800: '#b5162a',
          900: '#8a1125',
        },
        // Rift - the mysterious energy from the book
        rift: {
          50: '#edfcff',
          100: '#d6f7ff',
          200: '#b3f0ff',
          300: '#85e7ff',
          400: '#33c5ff',
          500: '#06a6ee',
          600: '#0086cc',
          700: '#006ba6',
          800: '#015a89',
          900: '#064a71',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
        serif: ['Crimson Pro', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cosmic-spin': 'spin 10s linear infinite',
        'cosmic-ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'shooting-star': 'shooting 3s linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shooting: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: 1 },
          '100%': { transform: 'translateX(200px) translateY(-200px)', opacity: 0 },
        },
      },
      boxShadow: {
        'cosmic': '0 0 15px 5px rgba(97, 61, 244, 0.3)',
        'cosmic-lg': '0 0 25px 10px rgba(97, 61, 244, 0.5)',
        'rift': '0 0 15px 5px rgba(51, 197, 255, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};