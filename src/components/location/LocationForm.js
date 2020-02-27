import React, { useState } from "react";
import LocationManager from "../../modules/LocationManager";
import "../animal/AnimalForm.css";

const LocationForm = props => {
  const [location, setLocation] = useState({ area: "", address: "", phone: "", url: "forgot.jpeg" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };


  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.area === "" || location.address === "" || location.phone === "" || location.url ==="" ) {
      window.alert("Please complete all fields");
    } else {
      setIsLoading(true);
      LocationManager.post(location).then(() => props.history.push("/locations"));
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
              id="area"
              placeholder="Location area"
            />
            <label htmlFor="Area">Area</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address"
              placeholder="Address"
            />
            <label htmlFor="address">Address</label>
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
              onClick={constructNewLocation}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm;
