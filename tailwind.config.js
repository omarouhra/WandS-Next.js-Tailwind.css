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
        light: "100",
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
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out",
        "fade-in-delay": "fade-in 2s ease-out ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
