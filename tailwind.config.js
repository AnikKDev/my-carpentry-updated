module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e5978b",

          "secondary": "#80fc8b",

          "accent": "#FAE5E5",

          "neutral": "#382839",

          "base-100": "#F8F8FC",

          "info": "#4869D5",

          "success": "#83E2C4",

          "warning": "#8C590D",

          "error": "#FB235D",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],


}