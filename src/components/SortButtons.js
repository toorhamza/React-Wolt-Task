import React, { useState } from "react";
import "../css/sortButtons.css";

const SortButtons = ({ data, updateRestaurants }) => {
  const [order, setOrder] = useState(true);

  const sortAsc = () => {
    const asc = data.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    updateRestaurants(asc);
    setOrder(true);
  };

  const sortDesc = () => {
    const desc = data.sort((a, b) =>
      a.name > b.name ? -1 : b.name > a.name ? 1 : 0
    );
    updateRestaurants(desc);
    setOrder(false);
  };

  const handleClick = () => {
    order ? sortDesc() : sortAsc();
  };

  return (
    <>
      <div className="button_container">
        <button className="sortB" onClick={handleClick}>
          Sort by Name
        </button>
      </div>
    </>
  );
};

export default SortButtons;
