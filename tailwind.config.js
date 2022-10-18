/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

        "ourMission": "url('img/ourMission.png')",
        "mainSmall": "url('img/main1x.png')"

      }
    },
  },
  plugins: [],
}
