import React, { useState } from "react";

function PlantCard({ plant, image, price, name }) {
  const [inStock, setInStock] = useState(true);

  function handleSetInStock() {
    setInStock((inStock) => !inStock);
  }

  return (
    <li className="card">
      <img src={image} alt={"https://via.placeholder.com/400"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleSetInStock} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleSetInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
