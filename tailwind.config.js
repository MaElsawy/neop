/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/**/*.html", "./assets/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary': '#004876',
        'secondary': '#3B2F2F',
        'tertiary': '#292625',
        'quaternary': '#6F4336',
        'quinary': '#1E71A6',
        'senary': '#8B8BA5',
      },
      screens: {
        'xs': '450px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'cube': "url('/src/assets/imgs/cube.svg')",
        'back': "url('/src/assets/imgs/back.svg')",
        'blob':"url('/src/assets/imgs/blob.svg')",
      },
      fontFamily: {
        'primary': ['Quicksand'],
        'secondary': ['Cormorant Infant'],
        'tertiary': ['Puritan'],
      },
      keyframes:{
        'slide-left-right':{
          '0%,100%':{transform: 'translateX(0)'},
          '50%':{transform: 'translateX(10px)'}
        },
      },
      animation:{
        'slide-left-right': 'slide-left-right 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

