import React from "react";
// import "./Animal.css";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={props.employee.url} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-petname">
          {props.employee.name}
        </span></h3>
        <p>Title: {props.employee.title}</p>
      </div>
    </div>
  );
}

export default EmployeeCard;