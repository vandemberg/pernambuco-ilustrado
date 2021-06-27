import { Carousel } from "react-bootstrap";
import React from "react";
import agresteImg from "../../assets/img/agreste/bonequeiro.JPG";

function Banner({ list }) {
  return (
    <Carousel style={{ marginTop: "40px" }}>
      {list.map((item) => (
        <Carousel.Item key={item} interval={1000}>
          <img className="d-block w-100" alt="First slide" src={agresteImg} />

          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
