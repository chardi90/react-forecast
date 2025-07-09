import React from "react";

export default function FormattedForecastDay(props) {
  const maxTemperature = () => `${Math.round(props.data.temperature.maximum)}°`;
  const minTemperature = () => `${Math.round(props.data.temperature.minimum)}°`;

  const day = () => {
    const date = new Date(props.data.time * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  };

  const formattedDate = () => {
    const date = new Date(props.data.time * 1000);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}`;
  };
  console.log("Forecast Day Props:", props.data);

  return (
    <ul>
      <li>
        <span className="day-date">
          {day()}
          <div className="date">{formattedDate()}</div>
        </span>

        <span className="temp">
          <div className="material-symbols-outlined">thermometer</div>
          <div className="stat data">
            {minTemperature()}°C{" "}
            <span className="temp-feels">{maxTemperature()}°C</span>
          </div>
        </span>

        <span className="forecast-icon">
          <img
            src={props.data.condition.icon_url}
            alt="weather-icon"
            className="forecast-icon"
          />
        </span>

        <span className="conditions">
          <div className="material-symbols-outlined"></div>
          <div className="description">{props.data.condition.description}</div>
        </span>

        <span className="wind">
          <div className="material-symbols-outlined">air</div>
          <div className="stat data">{props.data.wind.speed}Km/h</div>
        </span>

        <span className="humidity">
          <div className="material-symbols-outlined">water_drop</div>
          <div className="humity stat data">
            {props.data.temperature.humidity}%
          </div>
        </span>
      </li>
    </ul>
  );
}
