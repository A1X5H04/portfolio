/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-100': '#f8f9faff',
        'gray-200': '#e9ecefff',
        'gray-300': '#dee2e6ff',
        'gray-400': '#ced4daff',
        'gray-500': '#adb5bdff',
        'gray-600': '#6c757dff',
        'gray-700': '#495057ff',
        'gray-800': '#343a40ff',
        'gray-900': '#212529ff',
        'gray-1000': '#121212ff',
    },
  },
},
  plugins: [],
}