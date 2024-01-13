/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'rgba-white-80': 'rgba(255,255,255,0.8)',
        'rgba-dark-90': 'rgba(30,30,30,0.9)',
      },
      
    },
  },
  plugins: [],
}

