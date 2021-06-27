import React from "react";
import Item from "../Item/Item";
import agreste from "../../assets/img/agreste/forro_gonzaga.jpg";

function Grid({ list }) {
  return (
    <div className="row list-categories">
      {list.map((key) => (
        <Item key={key} title="Sertão" imageUrl={agreste} />
      ))}
    </div>
  );
}

export default Grid;
