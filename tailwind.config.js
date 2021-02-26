module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => theme("colors"),
    textColor: {
      primary: "#7E1B55",
      secondary: "#878787",
      white: "#FFFF",
    },

    fontFamily: {
      sans: ["itc-avant-garde-gothic-pro, sans-serif"],
    },
  },

  // backgroundImage: theme =>
  //   theme({
  //     horse: "url('/src/images/video/Caballo 2.mp4')",
  //   }),
  variants: {
    extend: {},
  },
  plugins: [],
}
