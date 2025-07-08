import React from "react";

export default function ChangeUnit({ unit, setUnit }) {
  return (
    <div>
      <button
        type="button"
        className={`btn btn-units ${unit === "fahrenheit" ? "active" : ""}`}
        onClick={() => setUnit("fahrenheit")}
      >
        °F
      </button>
      <button
        type="button"
        className={`btn btn-units ${unit === "celsius" ? "active" : ""}`}
        onClick={() => setUnit("celsius")}
      >
        °C
      </button>
    </div>
  );
}
