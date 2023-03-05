import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      primary: "#ED1B24",
      black: "#000000",
      white: "#FFFFFF",
      gray: "#9B9B9B",
      footer: "#222222",
    },

    fontSizes: {
      sm: "0.875rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      xxl: "1.75rem",
      "2xl": "2rem",
      "3xl": "3.875rem",
    },
  },
});
