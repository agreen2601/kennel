import React, { useState } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./Animal.css";

const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", activities: "", url: "forgot.jpeg" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "" || animal.activities === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      AnimalManager.post(animal).then(() => props.history.push("/animals"));
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
              placeholder="Animal name"
            />
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="activities"
              placeholder="Activities"
            />
            <label htmlFor="activities">Activities</label>
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
              className="btn"
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm;
