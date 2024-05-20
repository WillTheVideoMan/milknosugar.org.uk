/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ["var(--font-kirang-haerang)"],
      mono: ["var(--font-ibm-plex-mono)"],
    },
    colors: {
      "milk-brown": "#F8F5E6",
      "milk-black": "#302A0D",
      "true-black": "#000",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
