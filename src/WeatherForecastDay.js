import React from "react";

export default function FormattedForecastDay(props) {
  const maxTemperature = () => `${Math.round(props.data.temperature.maximum)}`;
  const minTemperature = () => `${Math.round(props.data.temperature.minimum)}`;

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
      <li className="row g-0 forecast-row">
        <div className="col-2 day-date">
          {day()}
          <div className="date">{formattedDate()}</div>
        </div>

        <div className="col-2 temp">
          <div className="material-symbols-outlined">thermometer</div>
          <div className="stat data">
            {maxTemperature()}°C{" "}
            <span className="temp-feels">{minTemperature()}°C</span>
          </div>
        </div>

        <div className="col-2 forecast-icon">
          <img
            src={props.data.condition.icon_url}
            alt="weather-icon"
            className="forecast-icon"
          />
        </div>

        <div className="col-2 conditions">
          <div className="description">{props.data.condition.description}</div>
        </div>

        <div className=" col-2 wind">
          <div className="material-symbols-outlined">air</div>
          <div className="stat data">
            {props.data.wind.speed}
            <span>Km/h</span>
          </div>
        </div>

        <div className="col-2 humidity">
          <div className="material-symbols-outlined">water_drop</div>
          <div className="humity stat data">
            {props.data.temperature.humidity}%
          </div>
        </div>
      </li>
    </ul>
  );
}
