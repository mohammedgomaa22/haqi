/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d6b404',
        secondary: '#262626',
        main_bg: '#F5F6FA',
      },

    },
  },
  plugins: [],
}