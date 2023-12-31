// // tailwind.config.js

// export default {
//   mode: "jit",
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {
//       typography: {
//         DEFAULT: {
//           css: {

//           },
//         },
//       },
//       screens: {
//         md: "826px",
//       },
//       colors: {
//         mainBg: "#FEFAE6",
//         secondaryBg: "#fef5bd",
//         balBrand: "#471AA0",
//         // 'headingDark':'#FFB8F0', // temporary
//         lBrand: "#C8BAE3",
//         // dBrand: "#0C134F",
//         dBrand: "#240d50",
//       },
//       fontFamily: {
//         sans: ["Trebuchet MS", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };

// tailwind.config.js

export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        md: "826px",
      },
      colors: {
        mainBg: "#FEFAE6",
        secondaryBg: "#fef5bd",
        balBrand: "#3A1D83",
        // balBrand: "#6c48b3",
        lBrand: "#dad1ec",
        dBrand: "#240d50",
      },
      fontFamily: {
        sans: ["Trebuchet MS", "sans-serif"],
      },
    },
  },
  plugins: [],
};
