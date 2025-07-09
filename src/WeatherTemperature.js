import React from "react";

export default function Temperature({ celsius, feelslike, unit }) {
  function convertToFahrenheit(temp) {
    return (temp * 9) / 5 + 32;
  }

  const displayTemp =
    unit === "celsius" ? celsius : convertToFahrenheit(celsius);
  const displayFeels =
    unit === "celsius" ? feelslike : convertToFahrenheit(feelslike);

  return (
    <div className="temp">
      <span className="todays-temp stat data">{Math.round(displayTemp)}</span>
      <span className="todays-temp-unit stat">
        °{unit === "celsius" ? "C" : "F"}
      </span>
      <br />
      <span className="p-0 m-0">
        feels like
        <span className="stat">
          <span className="data"> {Math.round(displayFeels)}</span>°
          {unit === "celsius" ? "C" : "F"}
        </span>
      </span>
    </div>
  );
}
