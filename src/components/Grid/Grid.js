import React from "react";
import { useHistory } from "react-router-dom";
import Item from "../Item/Item";

function Grid({ list, setShow, setArtifact }) {
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
    <div className="row list-categories">
      {list.map((item) => (
        <Item
          key={item.title}
          title={item.title}
          imageUrl={item.image}
          handleClick={() => handleClick(item)}
        />
      ))}
    </div>
  );
}

export default Grid;
