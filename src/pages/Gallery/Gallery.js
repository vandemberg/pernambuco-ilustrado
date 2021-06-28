import React from "react";
import { useParams } from "react-router-dom";
import { Main } from "./styles";
import { ViewPictures } from "../../components/ViewPictures";
import partners from "../../assets/partners.png";
import { category } from "../../utils/gallery";
import { Menu } from "../../components/Menu";

function Gallery() {
  const { id } = useParams();
  const gallery = category[id];

  return (
    <>
      <Menu />

      <Main>
        <ViewPictures title={gallery.title} list={gallery.list} />

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
