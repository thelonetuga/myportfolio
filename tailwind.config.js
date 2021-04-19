module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      backgroundImage: theme => ({
        'landing-image': "url('components/images/photography/landingImage.jpg')",
      }),
      colors: {
        'indigo-darkblue': '#223333',
        'indigo-blue': '#0085FF',
        'indigo-ligthblue': '#85C3FF',
        'indigo-gray': '#EEEEEE',
        'indigo-white': '#FFFFFF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
