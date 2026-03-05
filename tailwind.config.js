/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          300: "#06b6d4",
          400: "#06b6d4",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          900: "#082f49",
        },
        dark: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
        },
      },
    },
  },
  plugins: [],
}

module.exports = config;
