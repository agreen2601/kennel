import React from "react";
import "../animal/Animal.css";
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="image-div">
          <Link to={`/locations/${props.kennelLocation.id}`}>
            <img
              className="card-picture"
              src={require(`./${props.kennelLocation.url}`)}
              alt="Image Failure"
            />
          </Link>
        </div>
        <h3>
          Neighborhood:{" "}
          <span style={{ color: "darkslategrey" }}>{props.kennelLocation.area}</span>
        </h3>
        <Link to={`/locations/${props.kennelLocation.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.history.push(`/locations/${props.kennelLocation.id}/edit`)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.kennelLocation.id)}
        >
          Close Location
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
