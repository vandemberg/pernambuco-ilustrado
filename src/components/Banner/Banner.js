import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Container, Image } from "./styles";

function Banner({ list }) {
  const [show, setShow] = useState(false);
  const history = useHistory();

  function handleClick(item) {
    if (item.type === "link") {
      history.push(item.url);
    }
  }

  return (
    <Container
      style={{ marginTop: "40px", width: "100%" }}
      controls={false}
      fade={true}
    >
      {list.map((item) => (
        <Carousel.Item
          key={item.title}
          interval={3000}
          onClick={() => handleClick(item)}
        >
          <Image imageUrl={item.image}>
            <div
              className="card"
              onMouseLeave={() => setShow(false)}
              onMouseEnter={() => setShow(true)}
            >
              <div className="hover-effect" onClick={handleClick}></div>
              <div className="card-body"></div>

              {show && <div className="card-footer">{item.title}</div>}
            </div>
          </Image>
        </Carousel.Item>
      ))}
    </Container>
  );
}

export default Banner;
