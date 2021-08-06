module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      primary: "#0f2027",
      secondary: "#203a43",
      danger: "#2c5364",
      blue_x: "#2193b0",
      blue_y: "#6dd5ed",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
