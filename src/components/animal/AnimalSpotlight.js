import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "../../";

const AnimalSpotlight = props => {
  const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    activities: "",
    url: ""
  });

  useEffect(() => {
    AnimalManager.get(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
        activities: animal.activities,
        url: animal.url
      });
    });
  }, [props.animalId]);

  return (
    <div className="animal-spotlight">
      {animal.url && (
        <img className="detail-picture" src={require(`./${animal.url}`)} />
      )}{" "}
      <div>
        <h3>{animal.name}</h3>
        <p>Breed: {animal.breed}</p>
        <p>Activities: {animal.activities}</p>
      </div>
    </div>
  );
};

export default AnimalSpotlight;
