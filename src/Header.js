import React, { useState, useEffect } from "react";
import "./Header.css";
import ChangeUnit from "./HeaderChangeUnit";

export default function Header({ city, setCity, unit, setUnit }) {
  const [inputValue, setInputValue] = useState(city);

  useEffect(() => {
    setInputValue(city);
  }, [city]);

  function updateCityInput(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCity(inputValue);
  }

  return (
    <div className="Header">
      <div className="row d-flex">
        <div className="col-2">
          <ChangeUnit unit={unit} setUnit={setUnit} />
        </div>
        <div className="col-10 d-flex justify-content-end">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="search-input"
              placeholder="Enter a city..."
              className="search-input"
              autoFocus="on"
              value={inputValue}
              onChange={updateCityInput}
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </div>
      </div>
    </div>
  );
}
