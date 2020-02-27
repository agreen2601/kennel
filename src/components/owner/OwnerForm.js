import React, { useState } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "../animal/AnimalForm.css";

const OwnerForm = props => {
  const [owner, setOwner] = useState({ name: "", about: "", phone: "", url: "forgot.jpeg" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.name === "" || owner.about === "" || owner.phone === "") {
      window.alert("Please complete all fields");
    } else {
      setIsLoading(true);
      OwnerManager.post(owner).then(() => props.history.push("/owners"));
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
              placeholder="Owner name"
            />
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="about"
              placeholder="About"
            />
            <label htmlFor="about">About</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phone"
              placeholder="Phone"
            />
            <label htmlFor="phone">Phone</label>
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
              onClick={constructNewOwner}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm;
