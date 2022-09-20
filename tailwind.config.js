module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: {
          main: "hsl(30, 38%, 92%)",
          card: "white",
        },
        project: {
          primary: "hsl(158, 36%, 37%)",
          secondary: "hsl(212, 21%, 14%)",
          secondary_light: "hsl(228, 12%, 48%)",
        },
      },
      fontSize: {
        little: "0.75rem",
        big: "1.875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
