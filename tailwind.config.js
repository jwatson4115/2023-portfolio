const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"],
        body: ["Poppins", "system-ui", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        lead: {
          title: "#ccebff",
        },
        theme1: {
          gradient: {
            start: "#3498db",
            end: "#1d6fa5",
          },
          primary: "#3b7977",
          primary80: "var(--primary-80)",
          background: "#ecf4f3",
          button: "#167fc3",
          textblue: "#3498db",
        },
        theme2: {
          gradient: {
            start: "#85f9b3",
            end: "#7ec3d8",
          },
          primary: "#3b7977",
          background: "#ecf4f3",
        },
        primary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        secondary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        red: colors.red,
        orange: colors.orange,
        pink: colors.pink,
        blue: colors.blue,
        lightblue: colors.sky,
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          "80%": {
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
          },
          "80%": {
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-bottom": {
          "0%": {
            opacity: "0",
            transform: "translateY(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "header-3-animate": {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "0.7",
            "border-radius": "0",
          },

          "100%": {
            transform: "translateY(-1200px) rotate(720deg)",
            opacity: "0",
            "border-radius": "25%",
          },
        },
        "button-pulse": {
          "0%": {
            "box-shadow": "0 0 0 0 rgba(0, 0, 0, 0.7)",
          },
          "70%": {
            "box-shadow": "0 0 0 20px rgba(0, 0, 0, 0)",
          },
          "100%": {
            "box-shadow": "0 0 0 0 rgba(0, 0, 0, 0)",
          },
        },
      },
      animation: {
        "fade-in-left": "fade-in-left 2s ease-out",
        "fade-in-right": "fade-in-right 2s ease-out",
        "fade-in-bottom": "fade-in-bottom 3s ease-out",
        "fade-in-top": "fade-in-top 0.75s ease",
        "header-3-animate": "header-3-animate 25s linear infinite",
        "button-pulse": "button-pulse 1s",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [],
};
