import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    url: "",
    activities: ""
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

  const handleGoBack = () => {
    props.history.push("/animals");
  };

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
        activities: animal.activities,
        url: animal.url
      });
      setIsLoading(false);
    });
  }, [props.animalId]);

  return (
    <div className="card">
      <div className="card-content">
        <div className="image-div">
          {animal.url && (
            <img className="detail-picture" src={require(`./${animal.url}`)} />
          )}
        </div>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{animal.name}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
        <p className="bold">Activities: <span>{animal.activities}</span></p>
        <button className="top-button" type="button" onClick={handleGoBack}>
          Back To All Animals
        </button>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default AnimalDetail;
