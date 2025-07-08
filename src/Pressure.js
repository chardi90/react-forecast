import React from "react";

export default function Pressure({ pressure }) {
  function formattedPressure(pressure) {
    if (pressure >= 1020) return `High (${pressure})`;
    if (pressure >= 1000 && pressure < 1020) return `Normal (${pressure})`;
    if (pressure >= 980 && pressure < 1000) return `Low (${pressure})`;
    if (pressure >= 0 && pressure < 980) return `Very low (${pressure})`;
  }

  return (
    <li>
      <span className="material-symbols-outlined">thunderstorm</span> Pressure:
      <span className="stat">
        <span className="data"> {formattedPressure(pressure)}</span>
      </span>
    </li>
  );
}
