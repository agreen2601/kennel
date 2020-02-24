import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="employee-card">
        <picture>
          <img  className="card-image" src={require("./baloon-head.jpg")} />
        </picture>
        <h3>
          Name: <span className="card-employee-name">Doodles</span>
        </h3>
        <p>Title: CEO</p>
      </div>
      <hr></hr>

      <div className="employee-card">
        <picture>
          <img  className="card-image" src={require("./ramen-boy.jpg")} />
        </picture>
        <h3>
          Name: <span className="card-employee-name">Spot</span>
        </h3>
        <p>Title: Finance Manager</p>
      </div>
      <hr></hr>

      <div className="employee-card">
        <picture>
          <img  className="card-image" src={require("./spoon-guy.jpeg")} />
        </picture>
        <h3>
          Name: <span className="card-employee-name">Ruffles</span>
        </h3>
        <p>Title: Customer Service Specialist</p>
      </div>
      <hr></hr>

      <div className="employee-card">
        <picture>
          <img  className="card-image" src={require("./red-head.jpg")} />
        </picture>
        <h3>
          Name: <span className="card-employee-name">Socks</span>
        </h3>
        <p>Title: Animal Handler</p>
      </div>
      <hr></hr>
    </div>
  );
};

export default EmployeeCard;