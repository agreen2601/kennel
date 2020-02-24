import React from "react";
import "./Location.css";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="image-div">
          <img
            className="card-picture"
            src={require(`./${props.location.url}`)}
            alt="Image Failure"
          />
        </div>
        <h3>
          Neighborhood:{" "}
          <span className="card-locationname">{props.location.area}</span>
        </h3>
        <p>Address: {props.location.address}</p>
        <p>Phone: {props.location.phone}</p>
      </div>
    </div>
  );
};

export default LocationCard;
