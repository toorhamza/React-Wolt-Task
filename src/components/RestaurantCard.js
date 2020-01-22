import React from "react";
import "../css/restaurantCards.css";

const RestaurantCard = ({ data }) => {
  const keyGenerator = o => {
    let key = o.description.slice(0, 3) + o.image.slice(-9, -3);
    return key;
  };

  return (
    <>
      <div className="container">
        {data
          ? data.map((o, i) => (
              <div className="grid-item" key={keyGenerator(o)}>
                <div className="item-title">{o.name}</div>
                <img alt={o.title} src={o.image} />
                <div className="details-container">
                  <div className="flex-container">
                    <div className="item1">{o.city}</div>
                    <div className="item2">
                      Delivery Price:{" "}
                      {(Number(o.delivery_price) / 100).toFixed(2)} Euro
                    </div>
                  </div>
                  <div className="description">{o.description}</div>
                  <div className="flex-container">
                    <a href="https://wolt.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="item1 desc-bt">
                      Order
                    </a>
                    <a
                      href={`http://www.google.com/maps/place/${o.location[1]},${o.location[0]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="item2 desc-bt"
                    >
                      Find on Map
                    </a>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default RestaurantCard;
