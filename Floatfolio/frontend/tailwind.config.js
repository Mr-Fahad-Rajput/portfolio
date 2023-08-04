// tailwind.config.js

export default {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'], 
  theme: {
    extend: {
      screens: {
        'md': '826px'
      },
      colors: {
        'mainBg':'#FEFAE6',
        'textL': '#112A46',
        'balBrand':'#471AA0',
        'lBrand':'#C8BAE3',
        'dBrand':'#150830',
      },
      fontFamily: {
        sans: ['Trebuchet MS', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
