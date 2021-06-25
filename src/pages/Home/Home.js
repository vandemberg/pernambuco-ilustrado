import React from "react";

import { Main } from "./styles.js";
import logo from "../../assets/Logo.svg";
import partners from "../../assets/partners.png";
import { Link } from "react-router-dom";
import Item from "../../components/Item/Item.js";

function Home() {
  return (
    <Main className="home">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo pernambuco ilustrado" />
      </Link>

      <div className="row list-categories">
        <Item title="Sertão" />

        <Item title="Sertão" />

        <Item title="Sertão" />

        <Item title="Sertão" />
      </div>

      <img
        className="parceiros"
        src={partners}
        alt="Parceiros do pernambuco ilustrado"
      />
    </Main>
  );
}

export default Home;
