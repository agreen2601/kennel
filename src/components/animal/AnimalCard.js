import React from "react";
import "./Animal.css";

const AnimalCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="image-div">
          <img
            className="card-picture"
            src={require(`./${props.animal.url}`)}
            alt="Image Failure"
          />
        </div>
        <h3>
          Name: <span className="card-animalname">{props.animal.name}</span>
        </h3>
        <p>Breed: {props.animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalCard;
