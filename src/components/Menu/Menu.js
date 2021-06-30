import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Nav, Search } from "../../pages/Gallery/styles";
import Logo from "./../../assets/Logo.svg";

function Menu() {
  const history = useHistory();

  function handleClick(category) {
    history.push(`/categoria/${category}`);
  }

  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">
            <img src={Logo} alt="Logo do Pernambuco Ilustrado" />
          </Link>
        </li>

        <NavDropdown title="Regiões" id="navbarScrollingDropdown">
          <NavDropdown.Item onClick={() => handleClick("metropolitana")}>
            Metropolitana
          </NavDropdown.Item>

          <NavDropdown.Item onClick={() => handleClick("agreste")}>
            Agreste
          </NavDropdown.Item>

          <NavDropdown.Item onClick={() => handleClick("zona-da-mata")}>
            Zona da Mata
          </NavDropdown.Item>

          <NavDropdown.Item onClick={() => handleClick("sertao")}>
            Sertão
          </NavDropdown.Item>

          <NavDropdown.Item onClick={() => handleClick("sao-francisco")}>
            São Francisco
          </NavDropdown.Item>
        </NavDropdown>

        <li>
          <Search>
            <input type="text" placeholder="pesquisa" />
          </Search>
        </li>
      </ul>
    </Nav>
  );
}

export default Menu;
