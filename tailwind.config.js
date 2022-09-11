module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'darkGreen': '#6b7355',
      'lightGreen': '#a8a88b',
      'dustPink': '#efe0d4',
      'mauve': '#cdb9ab',
      'deepPink': '#c49c87',
      extend: {
        fontFamily: {
          'roboto': ['Roboto', 'sans-serif']
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover'] 
    },
  },
  plugins: [],
}