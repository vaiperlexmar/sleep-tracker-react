/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/*.{js,jsx}", "./src/*.{html,jsx, js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: `Lato, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";`,
      serif: `'Playfair Display', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;`,
    },
  },
  plugins: [],
};
