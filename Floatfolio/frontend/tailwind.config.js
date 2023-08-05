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
        'secondaryBg': '#fef5bd',
        'balBrand':'#471AA0',
        'headingDark':'#FFB8F0', // temporary
        'lBrand':'#C8BAE3',
        'dBrand':'#240d50',
      },
      fontFamily: {
        sans: ['Trebuchet MS', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
