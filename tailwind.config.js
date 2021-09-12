module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: "#003f6b",
        grayA: "#e5e5e5",
        googleRed: "#DB4437",
        facebookBlue: "#3b5998",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
