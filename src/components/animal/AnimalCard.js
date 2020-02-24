import React from "react";

const AnimalCard = () => {
  return (
    <div className="card">
      <div className="animal-card">
        <picture>
          <img className="card-image" src={require("./Lab.jpeg")} />
        </picture>
        <h3>
          Name: <span className="card-pet-name">Edward</span>
        </h3>
        <p>Breed: Lab</p>
      </div>
      <hr></hr>

      <div className="animal-card">
        <picture>
          <img className="card-image" src={require("./haircut.jpg")} />
        </picture>
        <h3>
          Name: <span className="card-pet-name">Dennis</span>
        </h3>
        <p>Breed: Mister Steal Ya Girl</p>
      </div>
      <hr></hr>

      <div className="animal-card">
        <picture>
          <img className="card-image" src={require("./heroin-dog.jpg")} />
        </picture>
        <h3>
          Name: <span className="card-pet-name">Francis</span>
        </h3>
        <p>Breed: Heroin Hell Doggy</p>
      </div>
      <hr></hr>

      <div className="animal-card">
        <picture>
          <img className="card-image" src={require("./windy-boy.png")} />
        </picture>
        <h3>
          Name: <span className="card-pet-name">Kathleen</span>
        </h3>
        <p>Breed: Windy Girl</p>
      </div>
    </div>
  );
};

export default AnimalCard;