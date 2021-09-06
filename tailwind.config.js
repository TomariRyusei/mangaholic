module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: "#003f6b",
        grayA: "#e5e5e5",
        twitterBlue: "#00acee",
        googleRed: "#DB4437",
        githubBlack: "#171515",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
