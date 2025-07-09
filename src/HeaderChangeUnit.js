import React from "react";

export default function ChangeUnit({ unit, setUnit }) {
  function handleChange(event) {
    setUnit(event.target.value);
  }

  return (
    <select
      className="form-select form-select-sm"
      value={unit}
      onChange={handleChange}
      style={{ width: "auto" }}
    >
      <option value="celsius">°C</option>
      <option value="fahrenheit">°F</option>
    </select>
  );
}
