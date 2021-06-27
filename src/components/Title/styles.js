import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  display: flex;

  strong {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-36) /
      var(--unnamed-line-spacing-44) var(--unnamed-font-family-montserrat);
    letter-spacing: var(--unnamed-character-spacing--0-72);
    color: var(--unnamed-color-000000);
    text-align: left;
    font: normal normal bold 36px/44px Montserrat;
    letter-spacing: -0.72px;
    color: #000000;
    opacity: 1;
  }
`;
