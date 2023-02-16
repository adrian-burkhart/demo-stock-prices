/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/public/hero-blur.svg')",
      },
      colors: {
        accent: "#4f38d4",
        input: "#171620",
        label: "#c0becc",
        ring: "#3482F6",
      },
    },
  },
  plugins: [],
}
