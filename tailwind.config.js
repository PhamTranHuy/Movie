module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#042541'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *'),
      addVariant('child-hover', '& > *:hover')
    }
  ]
}