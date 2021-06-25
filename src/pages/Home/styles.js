import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  padding-top: 20px;

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
    width: 80%;
    padding-top: 40px;
  }
`;
