import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Main } from "./styles";
import { ViewPictures } from "../../components/ViewPictures";
import partners from "../../assets/partners.png";
import { category } from "../../utils/gallery";
import { Menu } from "../../components/Menu";
import Spotlight from "../../components/Spotlight/Spotlight";

function Gallery() {
  const [show, setShow] = useState(false);
  const [artifact, setArtifact] = useState();
  const { id } = useParams();
  const gallery = category[id];

  function handleClose() {
    setShow(false);
    setArtifact(false);
  }

  return (
    <>
      <Spotlight show={show} handleClose={handleClose} artifact={artifact} />

      <Menu />

      <Main>
        <ViewPictures
          title={gallery.title}
          list={gallery.list}
          setShow={setShow}
          setArtifact={setArtifact}
        />

        <img
          className="parceiros"
          src={partners}
          alt="Parceiros do pernambuco ilustrado"
        />
      </Main>
    </>
  );
}

export default Gallery;
