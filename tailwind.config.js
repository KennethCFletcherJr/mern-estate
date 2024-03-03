/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,jsx}",//inserted jsx
    "./components/**/*.{html,js,jsx}",//inserted jsx
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

//Check the paths to make sure Tailwind is working in all files? 