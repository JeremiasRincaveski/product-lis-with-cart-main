import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  :root {
    --red: hsl(14, 86%, 42%);
    --green: hsl(159, 69%, 38%);
    --rose50: hsl(20, 50%, 98%);
    --rose100: hsl(13, 31%, 94%);
    --rose300: hsl(14, 25%, 72%);
    --rose400: hsl(7, 20%, 60%);
    --rose500: hsl(12, 20%, 44%);
    --rose900: hsl(14, 65%, 9%);
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Red Hat Text", sans-serif;
  }

  #root {
    background-color: hsl(20, 50%, 98%);
    width: 100vw;
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyled;