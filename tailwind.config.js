module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.html'],
  },
  darkMode: 'class',
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        headline: ['Oswald'],
      },
      colors: {
        mainColor: '#212f49',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
