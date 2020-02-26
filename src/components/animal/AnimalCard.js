import React from "react";
import "./Animal.css";
import { Link } from "react-router-dom";

const AnimalCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="image-div">
          <img className="card-picture" src={require(`./${props.animal.url}`)} />
        </div>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{props.animal.name}</span>
        </h3>
        <Link to={`/animals/${props.animal.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.deleteAnimal(props.animal.id)}
        >
          Discharge
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;
