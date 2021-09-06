import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`${css`
  :root {
    --desaturated-dark-cyan: hsl(180, 29%, 50%);
    --light-grayish-cyan-background: hsl(180, 52%, 96%);
    --light-grayish-cyan-filter-pill: hsl(180, 31%, 95%);
    --dark-grayish-cyan: hsl(180, 8%, 52%);
    --very-dark-grayish-cyan: hsl(180, 14%, 20%);

    --ff-brand: 'Spartan', sans-serif;
    --fs-global: 0.97em;
    --fw-normal: 500;
    --fw-bold: 700;

    --box-shadow: 0px 8px 24px rgba(91, 164, 164, 0.25);
    --timing-cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--ff-brand);
  }

  html {
    font-size: 1vw;
    font-weight: var(--fw-normal);
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
    background: ${({ theme }) => theme.body};
    &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }

    @media screen and (max-width: 1000px) {
      font-size: var(---fs-global);
    }
  }
`}`;
GlobalStyles.displayName = 'GlobalStyles';

export default GlobalStyles;
