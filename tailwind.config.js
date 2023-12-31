/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'blueColor': '#2a68ff',
        'greyIsh': '#f1f4f8',
        'textColor': '#252b36',
      }
    },
  },
  plugins: [],
}

