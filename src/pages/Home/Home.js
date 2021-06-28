import React from "react";

import { Main } from "./styles.js";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { ViewPictures } from "../../components/ViewPictures";
import partners from "../../assets/partners.png";
import { categories } from "../../utils";
function Home() {
  return (
    <Main className="home">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo pernambuco ilustrado" />
      </Link>

      <ViewPictures title="Regiões" list={categories} />

      <img
        className="parceiros"
        src={partners}
        alt="Parceiros do pernambuco ilustrado"
      />
    </Main>
  );
}

export default Home;
