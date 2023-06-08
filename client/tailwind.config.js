/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],

  theme: {
    extend: {
      colors: {
        "dark_Blue": "#03045E",
        "rich_Blue": "#023E8A",
        "cerulean_Blue": "#0077B6",
        "vivid_Cerulean": "#0096C7",
        "vivid_Cyan": "#00B4D8",
        "medium_Turquoise": "#48CAE4",
        "baby_Blue": "#90E0EF",
        "light_Blue": "#ADE8F4",
        "pale_Cyan": "#CAF0F8"
      }
    },

  },
  plugins: [],
}
