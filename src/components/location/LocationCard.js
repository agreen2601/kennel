import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="location-card">
        <picture>
          <img className="card-image" g src={require("./North.png")} />
        </picture>
        <h3>
          Location: <span className="card-location-name">North Nashville</span>
        </h3>
        <p>Address: 500 Poodle Way</p>
        <p>Phone Number: (615) Poo-dles</p>
      </div>
      <hr></hr>

      <div className="location-card">
        <picture>
          <img  className="card-image" src={require("./East.png")} />
        </picture>
        <h3>
          Location: <span className="card-location-name">South Nashville</span>
        </h3>
        <p>Address: 600 Yorkipoo Blvd</p>
        <p>Phone Number: (615) Dog-bone</p>
      </div>
      <hr></hr>

      <div className="location-card">
        <picture>
          <img  className="card-image" src={require("./South.png")} />
        </picture>
        <h3>
          Location: <span className="card-location-name">East Nashville</span>
        </h3>
        <p>Address: 700 Pomapoo Rd</p>
        <p>Phone Number: (615) Pup-poop</p>
      </div>
      <hr></hr>

      <div className="location-card">
        <picture>
          <img  className="card-image" src={require("./West.png")} />
        </picture>
        <h3>
          Location: <span className="card-location-name">West Nashville</span>
        </h3>
        <p>Address: 800 Maltipoo Ave</p>
        <p>Phone Number: (615) Flu-fBoy</p>
      </div>
    </div>
  );
};

export default LocationCard;