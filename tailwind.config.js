/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        profile: "url('/assets/imgs/hero_banner.png')",
      },
      fontFamily: {
        monteserat: ["Montserrat-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
