import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`${css`
  :root {
    --desaturated-dark-cyan: hsl(180, 29%, 50%);
    --light-grayish-cyan-background: hsl(180, 52%, 96%);
    --light-grayish-cyan-filter-pill: hsl(180, 31%, 95%);
    --dark-grayish-cyan: hsl(180, 8%, 52%);
    --very-dark-grayish-cyan: hsl(180, 14%, 20%);

    --ff-brand: 'Spartan', sans-serif;
    --fs-global: 1.04em;
    --fw-normal: 500;
    --fw-bold: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: var(--ff-brand);
    font-size: 1vw;
    font-weight: var(--fw-normal);

    @media screen and (max-width: 1200px) {
      font-size: var(---fs-global);
    }
  }
`}`;
GlobalStyles.displayName = 'GlobalStyles';

export default GlobalStyles;
