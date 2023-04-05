/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'italiana': ['Italiana'],
        'Jost': ['Jost', "sans-serif"],
      },
    },
  },
  plugins: [],
}
