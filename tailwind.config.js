/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // React JS files only
  ],
  theme: {
    extend: {
      animation: {
        // Defines the animation and sets it to loop infinitely
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        // Defines the horizontal movement from 0% to -50% (scrolling one full set of logos)
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [], // remove tailwindcss-animate or other shadcn plugins
};
