module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      backgroundImage: theme => ({
        'landing-image': "url('components/images/photography/landingImage.jpg')",
      }),
      colors: {
        'indigo-blue': '#41436A',
        'indigo-darkred': '#984063',
        'indigo-red': '#F64668',
        'indigo-orange': '#FE9677',
        'indigo-smoothpurple': '#685D79'
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
