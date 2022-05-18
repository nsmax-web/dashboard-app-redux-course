import { createGlobalStyle } from "styled-components";

export const GllobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-family: ${({ theme }) => theme.font.famaly} ;
        font-weight: ${({ theme }) => theme.font.weight.normal};
        font-size: ${({ theme }) => theme.font.size.normal} ;

        background-color: ${({ theme }) => theme.colors.grey_100} ;
}
`;

export const baseTheme = {
  type: "base",
  colors: {
    primary: "hsl(180, 29%, 50%)",
    grey_100: "hsl(180, 52%, 96%)",
    grey_200: "hsl(180, 31%, 95%)",
    grey_800: "hsl(180, 8%, 52%)",
    grey_900: "hsl(180, 14%, 20%)",
    shadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  },
  font: {
    size: {
      normal: "15px",
    },
    famaly: " 'Spartan', sans-serif",
    weight: {
      normal: 500,
      bold: 700,
    },
  },
  radius: {
    normal: "5px",
    full: "50%",
  },
};
