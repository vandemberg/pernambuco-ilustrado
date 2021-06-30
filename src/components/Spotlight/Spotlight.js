import React from "react";
import { Modal } from "react-bootstrap";

import "./styles.css";

function Spotlight({ handleClose, show, artifact }) {
  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      dialogClassName="modal-90w"
    >
      <Modal.Header
        style={{ textAlign: "right" }}
        closeButton
        closeLabel={() => <></>}
      ></Modal.Header>

      <Modal.Body>
        <div className="row">
          <img
            src={artifact?.image}
            className="img-fluid"
            alt={artifact?.title}
          />

          {/* <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="row">
              <h3 className="title"> Titulo </h3>

              <p className="content">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem
              </p>

              <span className="credit">Credito: Fulano / @fulano</span>
            </div>
          </div> */}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Spotlight;
