import React from "react";
import { Container } from "./styles";
import { ReactComponent as Grid } from "../../assets/icons/grid.svg";
import { ReactComponent as Banner } from "../../assets/icons/banner.svg";

function ModeView({ mode, changeMode }) {
  switch (mode) {
    case "grid":
      return (
        <Container onClick={() => changeMode()}>
          <span>
            Visualizar galeria <Grid />
          </span>
        </Container>
      );
    default:
      return (
        <Container onClick={() => changeMode()}>
          <span>Visualizar banner</span>

          <Banner />
        </Container>
      );
  }
}

export default ModeView;
