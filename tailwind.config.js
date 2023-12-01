/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '5': '5 5 0%',
        '4': '4 4 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
        '8': '8 8 0%',
        '9': '9 9 0%',
        '10': '10 10 0%',
        '20': '20 20 0%'
      },
    },
  },
  plugins: [],
}

