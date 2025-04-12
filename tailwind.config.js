module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./includes/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./assets/js/**/*.js",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        bgdark: "#1e112d",
        lighttext: "#f5f5f5",
        accent: "#a782e0",
        hoverlight: "#89b9f6",
        subtlelavender: "#cbb7e2",
      },
    },
  },
  plugins: [],
}