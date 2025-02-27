const fontGenerator = (
  fontFamily = "sans-serif",
  fontSize = "1.6rem",
  fontWeight = "normal",
  lineHeight = "normal",
  letterSpacing = "normal"
) => ({
  "font-family": fontFamily,
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
});

const theme = {
  colors: {
    font: {
      head: "#151927",
      body: "#2E3240",
      body_sub: "#606472",
      body_disable: "#C4C8D6",
    },
    border: {
      sub: "#C4C8D6",
      disable: "#F0F2F8",
    },
    background: {
      lightGray: "#f0f2f8",
    },
  },

  fonts: {
    // head
    h1: fontGenerator("sans-serif", "2rem", "600", "3.75rem", "-0.04rem"),
    h2: fontGenerator("sans-serif", "1.5rem", "600", "2.5rem", "-0.035rem"),
    h3: fontGenerator("sans-serif", "1.25rem", "600", "2rem", "-0.025rem"),

    // body
    b1: fontGenerator("sans-serif", "1rem", "400", "1.5rem", "-0.02rem"),
    b1_bold: fontGenerator("sans-serif", "1rem", "600", "1.5rem", "-0.02rem"),

    b3: fontGenerator("sans-serif", "0.75rem", "400", "1rem", "-0.02rem"),
    b3_bold: fontGenerator("sans-serif", "0.75rem", "600", "1rem", "-0.02rem"),
  },
};

export default theme;
