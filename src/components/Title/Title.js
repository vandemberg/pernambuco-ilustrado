import React from "react";
import { Container } from "./styles";
import { ModeView } from "../ModeView";

function Title({ title, changeMode, mode }) {
  return (
    <Container>
      <strong>{title}</strong>

      <ModeView mode={mode} changeMode={changeMode} />
    </Container>
  );
}

export default Title;
