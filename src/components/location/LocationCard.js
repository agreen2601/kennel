import React from "react";
// import "./Animal.css";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={props.location.url} alt="My Dog" />
        </picture>
        <h3>Neighborhood: <span className="card-locationname">
          {props.location.area}
        </span></h3>
        <p>Address: {props.location.address}</p>
        <p>Phone: {props.location.phone}</p>
      </div>
    </div>
  );
}

export default LocationCard;