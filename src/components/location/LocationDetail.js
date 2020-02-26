import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = props => {
  const [location, setLocation] = useState({ area: "", address: "", phone: "", url: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  const handleGoBack = () => {
      props.history.push("/locations")
  };

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId).then(location => {
      setLocation({
        area: location.area,
        address: location.address,
        phone: location.phone,
        url: location.url
      });
      setIsLoading(false);
    });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <div className="image-div">
          {location.url && <img className="detail-picture" src={require(`./${location.url}`)} />}
        </div>
        <h3>
          Area: <span style={{ color: "darkslategrey" }}>{location.area}</span>
        </h3>
        <p>Address: {location.address}</p>
        <p>Phone: {location.phone}</p>
        <button type="button" onClick={handleGoBack}>
          Back To All Locations
        </button>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close Location
        </button>
      </div>
    </div>
  );
};

export default LocationDetail;
