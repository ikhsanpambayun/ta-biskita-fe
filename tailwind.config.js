/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    colors: {
      primary: "#3A3270",
      "primary-light": "#00aaff",
      "primary-dark": "#2e2858",
    },
    extend: {
      boxShadow: {
        "2lg": "0 -25px 50px -30px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
