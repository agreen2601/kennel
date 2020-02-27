import React, { useState } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "../animal/AnimalForm.css";

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({ name: "", title: "", url: "forgot.jpeg" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const constructNewEmployee = evt => {
    evt.preventDefault();
    if (employee.name === "" || employee.breed === "" || employee.activities === "") {
      window.alert("Please input an employee name and breed");
    } else {
      setIsLoading(true);
      EmployeeManager.post(employee).then(() => props.history.push("/employees"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Employee name"
            />
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="title"
              placeholder="Title"
            />
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="url"
              placeholder="Url"
            />
            <label htmlFor="url">Url</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm;
