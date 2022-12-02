
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',

  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#0fcfec",
        "secondary": "#19d3ae",
        "accent": "#3a4256",
        "neutral": "#3d4451",
        "base-100":"#ffffff"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
