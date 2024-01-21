module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rochester: ['Rochester', 'cursive'],
        raleway: ['Raleway', 'sans-serif'], // Add the Raleway font to the fontFamily
      },
    },
  },
  plugins: [],
};



