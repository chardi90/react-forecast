import React from "react";

export default function WindDegree({ degree }) {
  function formattedWindDegree(degree) {
    if (degree >= 348.75 || degree < 11.25) return `N (${degree}°)`;
    if (degree >= 11.25 && degree < 33.75) return `NNE (${degree}°)`;
    if (degree >= 33.75 && degree < 56.25) return `NE (${degree}°)`;
    if (degree >= 56.25 && degree < 78.75) return `ENE (${degree}°)`;
    if (degree >= 78.75 && degree < 101.25) return `E (${degree}°)`;
    if (degree >= 101.25 && degree < 123.75) return `ESE (${degree}°)`;
    if (degree >= 123.75 && degree < 146.25) return `SE (${degree}°)`;
    if (degree >= 146.25 && degree < 168.75) return `SSE (${degree}°)`;
    if (degree >= 168.75 && degree < 191.25) return `S (${degree}°)`;
    if (degree >= 191.25 && degree < 213.75) return `SSW (${degree}°)`;
    if (degree >= 213.75 && degree < 236.25) return `SW (${degree}°)`;
    if (degree >= 236.25 && degree < 258.75) return `WSW (${degree}°)`;
    if (degree >= 258.75 && degree < 281.25) return `W (${degree}°)`;
    if (degree >= 281.25 && degree < 303.75) return `WNW (${degree}°)`;
    if (degree >= 303.75 && degree < 326.25) return `NW (${degree}°)`;
    if (degree >= 326.25 && degree < 348.75) return `NNW (${degree}°)`;
  }

  return (
    <li>
      <span className="material-symbols-outlined">flag</span> Wind from:
      <span className="stat">
        <span className="data"> {formattedWindDegree(degree)}</span>
      </span>
    </li>
  );
}
