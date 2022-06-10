/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      raleway: 'Raleway, sans-serif',
      spinnaker: 'Spinnaker, san-serif',
      roboto: 'Roboto, sans-serif',
    },
    extend: {
      screens: {
        mobile: { raw: '(max-width: 767.97px)' },
        tablet: { raw: '(max-width: 1199.98px)' },
      },
    },
  },
  plugins: [],
};
