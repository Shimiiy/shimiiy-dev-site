module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts.jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: "Quicksand"
    },
    extend: {
      colors: {
        orangeShim: '#DD8029',
        orangeShimLighter: '#F2B98E',
        blueTintBlack: '#4C4C64',
        blueTintBlackLighter: '#8585AB',
        yellowShim: '#EACF6C',
        yellowShimLighter: '#EBD88E',
      }
    },
  },
  plugins: [],
}
