import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="image-div">
          <Link to={`/locations/${props.location.id}`}>
            <img
              className="card-picture"
              src={require(`./${props.location.url}`)}
              alt="Image Failure"
            />
          </Link>
        </div>
        <h3>
          Neighborhood:{" "}
          <span style={{ color: "darkslategrey" }}>{props.location.area}</span>
        </h3>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.location.id)}
        >
          Close Location
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
