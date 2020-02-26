import React from "react";
import "./Employee.css";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="image-div">
          <img
            className="card-picture"
            src={require(`./${props.employee.url}`)}
            alt="Image Failure"
          />
        </div>
        <h3>
          Name: <span className="card-employeename">{props.employee.name}</span>
        </h3>
        <p>Title: {props.employee.title}</p>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire Employee</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
