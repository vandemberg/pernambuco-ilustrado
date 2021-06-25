import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export default createGlobalStyle`
  #root {
    width: 100%;
    height: 100vh;
  }

  :root {
      /* Font/text values */
    --unnamed-font-family-montserrat: Montserrat;
    --unnamed-font-style-normal: normal;
    --unnamed-font-weight-bold: bold;
    --unnamed-font-weight-normal: normal;
    --unnamed-font-size-20: 20px;
    --unnamed-font-size-36: 36px;
    --unnamed-character-spacing-0: 0px;
    --unnamed-character-spacing--0-72: -0.72px;
    --unnamed-character-spacing--0-4: -0.4px;
    --unnamed-line-spacing-24: 24px;
    --unnamed-line-spacing-44: 44px;
    }

    /* Character Styles */
    .text {
    font-family: var(--unnamed-font-family-montserrat);
    font-style: var(--unnamed-font-style-normal);
    font-weight: var(--unnamed-font-weight-normal);
    font-size: var(--unnamed-font-size-20);
    line-height: var(--unnamed-line-spacing-24);
    letter-spacing: var(--unnamed-character-spacing--0-4);
    color: var(--unnamed-color-000000);
    }
    .h3 {
    font-family: var(--unnamed-font-family-montserrat);
    font-style: var(--unnamed-font-style-normal);
    font-weight: var(--unnamed-font-weight-bold);
    font-size: var(--unnamed-font-size-20);
    line-height: var(--unnamed-line-spacing-24);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-000000);
    }
    .h1 {
    font-family: var(--unnamed-font-family-montserrat);
    font-style: var(--unnamed-font-style-normal);
    font-weight: var(--unnamed-font-weight-bold);
    font-size: var(--unnamed-font-size-36);
    line-height: var(--unnamed-line-spacing-44);
    letter-spacing: var(--unnamed-character-spacing--0-72);
    color: var(--unnamed-color-000000);
  }

  /* Character Styles */
  html, body, * {
    padding: 0px;
    margin: 0px;
  }
`;
