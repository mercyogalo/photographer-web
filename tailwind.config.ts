import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: "#8B4513", // Saddle Brown
          50: "#F5E6D3",
          100: "#E8D4B8",
          200: "#D4B896",
          300: "#C19A6B",
          400: "#A67C52",
          500: "#8B4513",
          600: "#6B3410",
          700: "#4A240B",
          800: "#2A1506",
          900: "#0A0502",
        },
        primary: {
          DEFAULT: "#FFFFFF", // White
          50: "#FFFFFF",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        light: {
          bg: "#FFFFFF",
          bgSecondary: "#FFFFFF",
          text: "#000000",
          textSecondary: "#000000",
        },
        dark: {
          bg: "#000000",
          bgSecondary: "#1A1A1A",
          text: "#FFFFFF",
          textSecondary: "#E5E5E5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        elegant: ["var(--font-playfair)", "serif"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", maxHeight: "0" },
          "100%": { opacity: "1", maxHeight: "500px" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

