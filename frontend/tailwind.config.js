/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#F3E8FF',
          100: '#E9D5FF',
          200: '#DDD6FE',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6A1B9A',
          800: '#581C87',
          900: '#3B0764',
          brand: '#6A1B9A',
        },
        silver: {
          100: '#F7F7F7',
          200: '#E5E5E5',
          300: '#D1D5DB',
          400: '#9CA3AF',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'Plus Jakarta Sans', 'Poppins', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '18px',
      },
      maxWidth: {
        'container': '1320px',
      }
    },
  },
  plugins: [],
}
