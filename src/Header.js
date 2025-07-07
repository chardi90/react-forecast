import React from "react";
import "./Header.css";

export default function Header({ city, setCity }) {
  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Header">
      <div className="row d-flex">
        <div className="col-2 variables d-flex flex-column justify-content-start">
          <button type="button" className="btn btn-units">
            °F
          </button>
          <button type="button" className="btn btn-units mt-1">
            M/h
          </button>
        </div>
        <div className="col-10 d-flex justify-content-end">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="search-input"
              placeholder="Enter a city..."
              className="search-input"
              autoFocus="on"
              value={city}
              onChange={updateCity}
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </div>
      </div>
    </div>
  );
}
