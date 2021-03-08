import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["400"],
    },
  ],
  headerFontFamily: ["Kollektif-Bold", "sans-serif"],
  headerWeight: 500,
  bodyFontFamily: ["Montserrat", "sans-serif"],
  bodyWeight: 400,
  baseFontSize: "1.6rem",
  baseLineHeight: 2,
  overrideStyles: ({ adjustFontSizeTo }) => ({
    h1: {
      ...adjustFontSizeTo("5.2rem"),
      color: "#22223B",
      lineHeight: "5.2rem",
    },
    h2: {
      ...adjustFontSizeTo("3.2rem"),
      fontFamily: ["Kollektif", "sans-serif"].join(","),
      color: "#22223B",
      lineHeight: "4rem",
      marginBottom: rhythm(1/2),
    },
    h3: {
      ...adjustFontSizeTo("3.2rem"),
      lineHeight: "3.2rem",
      color: "#22223B",
      fontFamily: ["Kollektif", "sans-serif"].join(","),
      marginBottom: rhythm(1/2),
    },
    h4: {
      ...adjustFontSizeTo("2.4rem"),
      lineHeight: "2.4rem",
      color: "#22223B",
      fontFamily: ["Kollektif-Bold", "sans-serif"].join(","),
      marginBottom: rhythm(1/2),
    },
    h5: {
      ...adjustFontSizeTo("2rem"),
      lineHeight: "2.4rem",
      color: "#22223B",
      fontFamily: ["Kollektif", "sans-serif"].join(","),
      marginBottom: rhythm(0),
    },
    h6: {
      ...adjustFontSizeTo("1.6rem"),
      lineHeight: "2.4rem",
      color: "#1B6F8C",
      fontFamily: ["Kollektif", "sans-serif"].join(","),
      marginBottom: rhythm(0),
    },
    p: {
      ...adjustFontSizeTo("1.6rem"),
      color: "#22223B",
    },
    ".nav": {
      ...adjustFontSizeTo("1.6rem"),
      fontFamily: ["Kollektif-Bold", "sans-serif"].join(","),
      letterSpacing: `2px`,
      textTransform: `uppercase`,
      color: "#22223B"
    },
    ".card": {
      textDecoration: `none`,
    },
    ".post-metadata": {
      ...adjustFontSizeTo("1.4rem")
    },

  }),
})

export const { scale, rhythm, options } = typography
export default typography
