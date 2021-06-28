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
