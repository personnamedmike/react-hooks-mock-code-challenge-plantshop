import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // state: make array of plants
  const [plants, getPlants] = useState([]);
  const [searchPlants, setSearchPlants] = useState("");

  // console.log(plants);

  const API = "http://localhost:6001/plants";

  useEffect(
    () =>
      fetch(API)
        .then((resp) => resp.json())
        .then((plants) => {
          getPlants(plants);
          console.log(plants);
        }),
    []
  );

  function updatePlantsArray(newPlant) {
    getPlants([...plants, newPlant]);
  }

  function updateSetSearchPlants(event) {
    console.log(event.target.value);
    setSearchPlants(() => event.target.value);
  }

  return (
    <main>
      <NewPlantForm
        API={API}
        updatePlantsArray={updatePlantsArray}
        plants={plants}
      />
      <Search
        updateSetSearchPlants={updateSetSearchPlants}
        searchPlants={searchPlants}
      />
      <PlantList plants={plants} searchPlants={searchPlants} />
    </main>
  );
}

export default PlantPage;
