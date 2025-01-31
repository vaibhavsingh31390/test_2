/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/app/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#393E46',
        secondary: '#EEEEEE',
        accent: '#00ADB5',
        background: '#222831',
        white: '#fff',
      },
    },
  },
  plugins: [],
};
