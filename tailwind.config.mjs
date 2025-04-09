// tailwind.config.mjs
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "heading-xl": "77.71px",
      },
      borderRadius: {
        "xl-custom": "70px",
      },
      spacing: {
        72: "18rem",
      },
    },
  },
  plugins: [],
};
