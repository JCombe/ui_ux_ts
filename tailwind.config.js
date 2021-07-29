module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      height: {
        "content": "fit-content"
      },
      borderWidth: {
        "1": "1px"
      },
      width: {
        "100": "35 rem"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', "focus"],
      borderColor: ["active", "focus"]
    },
  },
  plugins: [],
}
