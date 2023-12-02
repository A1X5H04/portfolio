/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "gray-100": "#f8f9fa",
        "gray-200": "#e9ecef",
        "gray-300": "#dee2e6",
        "gray-400": "#ced4da",
        "gray-500": "#adb5bd",
        "gray-600": "#6c757d",
        "gray-700": "#495057",
        "gray-800": "#343a40",
        "gray-900": "#212529",
        "gray-1000": "#121212",
      },
      transitionProperty: {
        height: "height",
      },
      animation: {
        fadein: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
