import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchPlants }) {
  // console.log(plants);

  const filteredResults = plants.filter((plant) => {
    if (searchPlants === "") {
      return true;
    } else if (plant.name.toLowerCase().includes(searchPlants.toLowerCase())) {
      return true;
    }
  });
  const thePlants = filteredResults.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        price={plant.price}
        image={plant.image}
        name={plant.name}
      />
    );
  });

  console.log(plants);

  console.log(filteredResults);

  return <ul className="cards">{thePlants}</ul>;
}

export default PlantList;
