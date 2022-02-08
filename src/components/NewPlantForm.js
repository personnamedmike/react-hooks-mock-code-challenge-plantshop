import React, { useState } from "react";

function NewPlantForm({ API, plants, updatePlantsArray }) {
  const [plantName, setPlantName] = useState("");
  const [plantURL, setPlantURL] = useState("");
  const [plantPrice, setPlantPrice] = useState("");
  // const [formData, setFormData] = useState({});

  function populatePlantName(event) {
    setPlantName(event.target.value);
  }

  function populatePlantURL(event) {
    setPlantURL(event.target.value);
  }

  function populatePlantPrice(event) {
    setPlantPrice(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: plantName,
        image: plantURL,
        price: plantPrice,
      }),
    })
      .then((r) => r.json())
      .then((inputtedPlant) => updatePlantsArray(inputtedPlant));
  }

  console.log(API);

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={plantName}
          onChange={populatePlantName}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={plantURL}
          onChange={populatePlantURL}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={plantPrice}
          onChange={populatePlantPrice}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
