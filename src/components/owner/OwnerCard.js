import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="owner-card">
        <picture>
          <img  className="card-image"  src={require("./tree1.jpg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-owner-name">Jeff</span>
        </h3>
        <p>About: Loves dogs.</p>
      </div>
      <hr></hr>

      <div className="owner-card">
        <picture>
          <img  className="card-image"  src={require("./tree2.jpg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-owner-name">Linda & Terrance</span>
        </h3>
        <p>About: Adores dogs.</p>
      </div>
      <hr></hr>

      <div className="owner-card">
        <picture>
          <img  className="card-image"  src={require("./tree3.jpeg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-owner-name">Jeff</span>
        </h3>
        <p>About: Thinks dogs are great.</p>
      </div>
      <hr></hr>

      <div className="owner-card">
        <picture>
          <img  className="card-image"  src={require("./tree4.jpg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-owner-name">Jeff</span>
        </h3>
        <p>About: Loathes dogs.</p>
      </div>
    </div>
  );
};

export default OwnerCard;