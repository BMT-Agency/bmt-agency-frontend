module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero-pattern": "url('/src/images/Brain.png')",
        banner: "url('/src/images/banner.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
