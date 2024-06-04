/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redditMono: ["Reddit Mono", "serif"],
        inter: ["Inter", "serif"],
      },
      colors: {
        "orin-blue": "#5258E4",
        "orin-black": "#1F2122",
        "orin-grey": "#414346",
        "orin-off-white": "#FAF9F6",
      },
    },
  },
  plugins: [],
};
