import React, { useState } from "react";
import { Container } from "./styles";

function Item({ title, imageUrl }) {
  const [show, setShow] = useState(false);

  return (
    <Container className="col-lg-4 col-md-6 col-sm-12" imageUrl={imageUrl}>
      <div
        className="card"
        onMouseLeave={() => setShow(false)}
        onMouseEnter={() => setShow(true)}
      >
        <div className="hover-effect"></div>
        <div className="card-body"></div>

        {show && <div className="card-footer">{title}</div>}
      </div>
    </Container>
  );
}

export default Item;
