import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  padding-top: 20px;
  margin-left: 15%;
  margin-right: 15%;

  .logo {
    padding-top: 10px;
    width: 410px;
    height: 110px;
  }

  .mapa {
    width: 800px;
  }

  .parceiros {
    width: 800px;
  }

  a:hover {
    opacity: 0.5;
  }

  .list-categories {
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Nav = styled.nav`
  margin: 32px 140px 80px 100px;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-bold) var(--unnamed-font-size-20) /
        var(--unnamed-line-spacing-24) var(--unnamed-font-family-montserrat);
      letter-spacing: var(--unnamed-character-spacing-0);
      text-align: left;
      font: normal normal bold 20px/24px Montserrat;
      letter-spacing: 0px;
      color: #000;

      text-decoration: none;

      :hover {
        opacity: 0.5;
      }
    }
  }

  img {
    width: 275px;
    height: 80px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 10px;

  width: 294px;
  height: 52px;

  border: 1px solid #707070;
  border-radius: 25px;

  input {
    font-size: 16px;
    border: none;
    width: 80%;

    :focus {
      border: none;
      outline: none;
    }
  }
`;
