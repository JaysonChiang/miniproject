module.exports = {
  content: [],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        headline: ['Oswald'],
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
