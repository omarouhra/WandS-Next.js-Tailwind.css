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
        "extra-light": 100,
        thin: 200,
        light: 300,
        normal: 400,
        semibold: 600,
        bold: 700,
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
        scroll: {
          "0%": {
            transform: "translateX(0px)",
          },
          "100%": {
            transform: "translatex(calc(-96px*17))",
          },
        },
        scrollReverse: {
          "0%": {
            transform: "translateX(0px)",
            transform: "translatex(calc(-96px*17))",
          },
          "100%": {
            transform: "translatex(0px)",
          },
        },
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
        "fade-out": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-right": {
          "0%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
        },
      },
      animation: {
        scroll: "scroll 50s linear infinite",
        scrollReverse: "scrollReverse 50s linear infinite",
        "fade-in": "fade-in 0.8s ease-out",
        "fade-out": "fade-out 0.8s ease-out",
        "fade-left": "fade-left 1s ease-out",
        "fade-right": "fade-right 0.8s ease-out",
        "fade-in-delay": "fade-in 2s ease-out ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
