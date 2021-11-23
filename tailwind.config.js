module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        cyan: "hsl(178, 100%, 50%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
