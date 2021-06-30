import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Container, Image } from "./styles";

function Banner({ list, setShow, setArtifact }) {
  const [hover, setHover] = useState(false);
  const history = useHistory();

  function handleClick(item) {
    if (item.type === "link") {
      history.push(item.url);
    } else {
      setShow(true);
      setArtifact(item);
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
              onMouseLeave={() => setHover(false)}
              onMouseEnter={() => setHover(true)}
            >
              <div className="hover-effect" onClick={handleClick}></div>
              <div className="card-body"></div>

              {hover && <div className="card-footer">{item.title}</div>}
            </div>
          </Image>
        </Carousel.Item>
      ))}
    </Container>
  );
}

export default Banner;
