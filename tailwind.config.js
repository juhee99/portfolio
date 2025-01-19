/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },

  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: ['emerald', 'business'],
    darkTheme: 'business',
  },
};
