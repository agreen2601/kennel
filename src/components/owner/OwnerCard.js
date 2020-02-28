import React from "react";

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
        <p>Phone: {props.owner.phone}</p>
        <button
          type="button"
          onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}
        >
          Edit
        </button>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove Owner</button>
      </div>
    </div>
  );
};

export default OwnerCard;
