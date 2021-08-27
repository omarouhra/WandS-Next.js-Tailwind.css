module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins",
        logoFont: "Open Sans Condensed",
      },
      fontWeight: {
        light:'100'
      },
      colors: {
        blue: {
          dark: "#1E8FB2",
          light: "#D1F4FF",
        },
        gray: {
          dark: "#8F8F8F",
          light: "#FBFBFB",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
