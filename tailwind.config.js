module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bmt: {
        DEFAULT: "#7E1B55",
        dark: "#70164B",
        light: "#A73377",
      },
      bmtgray: {
        DEFAULT: "#878787",
      },
      white: {
        DEFAULT: "#FFFF",
        transparent: "#ff000020",
      },
    },

    fontFamily: {
      sans: ["itc-avant-garde-gothic-pro, sans-serif"],
    },

    // backgroundImage: theme =>
    //   theme({
    //     horse: "url('/src/images/video/Caballo 2.mp4')",
    //   }),
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
