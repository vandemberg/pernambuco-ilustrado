import React from "react";
import { useHistory } from "react-router-dom";
import Item from "../Item/Item";

function Grid({ list }) {
  const history = useHistory();

  function handleClick(item) {
    console.log(item);
    if (item.type === "link") {
      history.push(item.url);
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
