/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./assets/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#004876',
        'secondary': '#3B2F2F',
        'tertiary': '#292625',
        'quaternary': '#6F4336',
        'quinary': '#1E71A6',
        'senary': '#8B8BA5',
        'gray': '#004876',
      },
      screens: {
        'xs': '400px',
        // => @media (min-width: 400px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        '2md': '850px',
        // => @media (min-width: 850px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        'cube': "url('/assets/imgs/cube.svg')",
        'back': "url('/assets/imgs/back.svg')",
        'blob':"url('/assets/imgs/blob.svg')",
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
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
}

