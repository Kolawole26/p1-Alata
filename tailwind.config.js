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
        'custom-red-2': '#FF000B',
        'custom-yellow': '#FEA621',
        'custom-yellow-2': '#E29014',
        'custom-gray': '#C7C7C7',
        'custom-gray-2': '#5A5A5A',
        'custom-gray-3': '#D9D9D9',
        'custom-off-white': '#E9E9E9',
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        zoom: 'zoom 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
