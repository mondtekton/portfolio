/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "bg-frames": {
          "0%": { backgroundPosition: "0%" },
          "50%": { backgroundPosition: "50%" },
          "75%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0 50%" },
        },

        "light-frames": {
          "0%": { top: "10%", left: "5%" },
          "10%": { top: "25%", left: "12%", transform: "scale(3)" },
          "20%": { top: "45%", left: "20%" },
          "30%": { top: "65%", left: "30%" },
          "50%": { top: "70%", left: "50%" },
          "60%": { top: "50%", left: "60%" },
          "70%": { transform: "translateY(-70%)" },
          "90%": { top: "45%", left: "70%" },
          "100%": { top: "10%", left: "5%", transform: "rotate(360deg)" },
        },

        "button-gradient": {
          "0%": { backgroundPosition: "0%" },
          "50%": { backgroundPosition: "50%" },
          "75%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0 50%" },
        },
      },
      animation: {
        "bg-animate": "bg-frames 5s linear  infinite alternate",

        "bg-light-animate":
          "light-frames 6s cubic-bezier(0.42, 0, 0.58, 1) infinite",

        "button-gradient-animate":
          "button-gradient 3s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate",
      },
    },
  },
  plugins: [],
};
