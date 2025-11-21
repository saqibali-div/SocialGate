/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#1A3636",
        card: "#40534C",
        accent1: "#677D6A",
        accent2: "#506152",
        brand: "#f8f8f8", // main text / brand color
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        lato: ["Lato", "sans-serif"],
        display: ["Momo Trust Display", "serif"],
        signature: ["Momo Signature", "cursive"],
        // serif: ["Playfair Display", "serif"],
        trust: ["Momo Trust Display", "sans-serif"],
        tinos: ["Tinos", "serif"],
      },
    },
  },
  plugins: [],
};
