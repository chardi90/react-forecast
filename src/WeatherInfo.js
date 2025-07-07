import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="Weather">
      <div className="location box">
        <h1>
          <span>{props.city}</span>
        </h1>
        <h2>
          <span>{props.data.country}</span>
        </h2>
      </div>
      <div className="current box">
        <div className="divider-wrapper">
          <div className="split-text divider">
            <h3>Current weather</h3>
            <h3>
              <FormattedDate date={props.data.date} />
            </h3>
          </div>
        </div>
        <div className="split-text">
          <div className="todays-left-side todays-content">
            <div>
              <img
                src={props.data.icon}
                alt="weather-icon"
                className="todays-icon"
              />
            </div>
            <div className="temp">
              <span className="todays-temp stat data">
                {Math.round(props.data.temperature)}
              </span>
              <span className="todays-temp-unit stat">°C</span>
              <br />
              <span className="p-0 m-0">
                feels like
                <span className="stat">
                  <span className="data">
                    {" "}
                    {Math.round(props.data.feelslike)}
                  </span>
                  °C
                </span>
              </span>
              <div className="p-0 m-0">
                <span>{props.data.description}</span>
              </div>
            </div>
          </div>

          <div className="todays-right-side">
            <ul className="todays-stats">
              <li>
                <span className="material-symbols-outlined">air</span> Wind
                speed:
                <span className="stat">
                  <span className="data"> {props.data.wind} Km/h</span>
                </span>
              </li>
              <li>
                <span className="material-symbols-outlined">flag</span> Wind
                from:
                <span className="stat">
                  <span className="data"> {props.data.direction}</span>
                </span>
              </li>
              <li>
                <span className="material-symbols-outlined">water_drop</span>{" "}
                Humidity:
                <span className="stat">
                  <span className="data"> {props.data.humidity}%</span>
                </span>
              </li>
              <li>
                <span className="material-symbols-outlined">thunderstorm</span>{" "}
                Pressure:
                <span className="stat">
                  <span className="data"> {props.data.pressure}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
