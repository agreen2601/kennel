import React from "react";
import "./Owner.css";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="image-div">
          <img
            className="card-picture"
            src={require(`./${props.owner.url}`)}
            alt="Image Failure"
          />
        </div>
        <h3>
          Name: <span className="card-ownername">{props.owner.name}</span>
        </h3>
        <p>About: {props.owner.about}</p>
        <p>About: {props.owner.phone}</p>
      </div>
    </div>
  );
};

export default OwnerCard;
