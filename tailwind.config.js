/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        amatic: ['Amatic SC', 'cursive'],
      },
      colors: {
        'custom-red': '#D41B23', // Define your custom color
        'custom-yellow': '#FEA621',
        'custom-gray': '#C7C7C7',
      },
    },
  },
  plugins: [],
};
