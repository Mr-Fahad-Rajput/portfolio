// tailwind.config.js

export default {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'], 
  theme: {
    extend: {
      colors: {
        'balBrand':'#471AA0',
        'lBrand':'#C8BAE3',
        'dBrand':'#150830',
      }
    },
  },
  plugins: [],
};
