import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "../animal/AnimalForm.css";

const OwnerEditForm = props => {
  const [owner, setOwner] = useState({
    name: "",
    about: "",
    phone: "",
    url: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const updateExistingOwner = evt => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedOwner = {
      id: props.match.params.ownerId,
      name: owner.name,
      about: owner.about,
      phone: owner.phone,
      url: owner.url
    };

    OwnerManager.update(editedOwner).then(() =>
      props.history.push("/owners")
    );
  };

  useEffect(() => {
    OwnerManager.get(props.match.params.ownerId).then(owner => {
      setOwner(owner);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={owner.name}
            />
            <label htmlFor="name">Owner name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="about"
              value={owner.about}
            />
            <label htmlFor="about">About</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="phone"
              value={owner.phone}
            />
            <label htmlFor="phone">Phone</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="url"
              value={owner.url}
            />
            <label htmlFor="url">Url</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingOwner}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerEditForm;
