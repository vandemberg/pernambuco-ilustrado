import React, { useState } from "react";
import Title from "../Title/Title";
import { Container } from "./styles";
import { Grid } from "../Grid";
import { Banner } from "../Banner";

function ViewPictures({ list }) {
  const [mode, setMode] = useState("banner");

  function changeMode() {
    setMode(mode === "banner" ? "grid" : "banner");
  }

  return (
    <Container>
      <Title title="Regiões" mode={mode} changeMode={changeMode} />

      {mode === "grid" ? <Grid list={list} /> : <Banner list={list} />}
    </Container>
  );
}

export default ViewPictures;
