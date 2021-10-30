module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      "./src/**/*.js",
      "./public/index.html",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: ["PT Sans"],
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
      animation: ["focus", "hover", "active"],
      transform: ["focus", "hover", "active"],
      scale: ["active", "group-hover"],
      borderRadius: ["hover"],
      borderWidth: ["hover"],
      borderOpacity: ["hover"],
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "95%",
          "@screen sm": {
            maxWidth: "85%",
          },
          "@screen lg": {
            maxWidth: "75%",
          },
          "@screen 2xl": {
            maxWidth: "1524px",
          },
        },
      });
    },
  ],
};
