module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      backgroundImage: theme => ({
        'landing-image': "url('components/images/photography/landingImage.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
