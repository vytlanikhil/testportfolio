/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a78bfa',
          DEFAULT: '#8b5cf6', // Lavender/Purple
          dark: '#6d28d9',
        },
        secondary: {
          light: '#f472b6',
          DEFAULT: '#ec4899', // Soft Pink
          dark: '#be185d',
        },
        accent: {
          light: '#7dd3fc',
          DEFAULT: '#38bdf8', // Sky Blue
          dark: '#0369a1',
        },
        darkbg: {
          light: '#1f2937',
          DEFAULT: '#0f172a',
          dark: '#030712',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.02)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(15px) scale(0.98)' },
        }
      }
    },
  },
  plugins: [],
}
