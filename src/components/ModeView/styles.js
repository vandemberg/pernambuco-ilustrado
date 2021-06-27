import styled from "styled-components";

export const Container = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  span {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
      var(--unnamed-line-spacing-24) var(--unnamed-font-family-montserrat);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 16px/20px Montserrat;
    letter-spacing: 0px;
    color: #434343;
    opacity: 1;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
