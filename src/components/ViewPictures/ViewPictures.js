import React, { useState } from "react";
import Title from "../Title/Title";
import { Container } from "./styles";
import { Grid } from "../Grid";
import { Banner } from "../Banner";

function ViewPictures({ list, title }) {
  const [mode, setMode] = useState("grid");

  function changeMode() {
    setMode(mode === "banner" ? "grid" : "banner");
  }

  return (
    <Container>
      <Title title={title} mode={mode} changeMode={changeMode} />

      {mode === "grid" ? <Grid list={list} /> : <Banner list={list} />}
    </Container>
  );
}

export default ViewPictures;
