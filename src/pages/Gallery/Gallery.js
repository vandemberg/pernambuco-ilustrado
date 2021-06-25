import React from "react";
import { Link } from "react-router-dom";
import { Main, Nav, Search } from "./styles";
import Logo from "./../../assets/Logo.svg";

function Gallery() {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <Link to="/">
              <img src={Logo} alt="Logo do Pernambuco Ilustrado" />
            </Link>
          </li>

          <li>
            <Link to="/sobre">Sobre</Link>
          </li>

          <li>
            <Link to="/regioes">Regiões</Link>
          </li>

          <li>
            <Link to="/contato">Contato</Link>
          </li>

          <li>
            <Search>
              <input type="text" placeholder="pesquisa" />
            </Search>
          </li>
        </ul>
      </Nav>

      <Main>
        <section id="header">
          <h1> Metropolitana Recife</h1>

          <Link> Visualizar galeria </Link>
        </section>
      </Main>
    </>
  );
}

export default Gallery;
