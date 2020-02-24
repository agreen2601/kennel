import React from "react";
// import "./Animal.css";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={props.owner.url} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-ownername">
          {props.owner.name}
        </span></h3>
        <p>About: {props.owner.about}</p>
      </div>
    </div>
  );
}

export default OwnerCard;