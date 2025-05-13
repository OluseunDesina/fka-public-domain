export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- this is critical
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ClashDisplay", "sans-serif"],
      },
    },
  },
  plugins: [],
};
