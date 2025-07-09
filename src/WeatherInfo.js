import React from "react";
import WeatherDate from "./WeatherDate";
import Temperature from "./WeatherTemperature";
import WindDegree from "./WeatherWindDegree";
import Pressure from "./WeatherPressure";

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
              <WeatherDate date={props.data.date} />
            </h3>
          </div>
        </div>
        <div className="row weather-info">
          <div className="todays-left-side todays-content col-sm-6">
            <div className="row d-flex justify-content-center ms-sm-1 ms-md-0">
              <div className="todays-icon col-6 col-md-4">
                <img src={props.data.icon} alt="weather-icon" />
              </div>
              <div className="todays-weather col-6 col-md-8 text-sm-center text-md-start">
                <div className="temp">
                  <Temperature
                    celsius={props.data.temperature}
                    feelslike={props.data.feelslike}
                    unit={props.unit}
                  />
                </div>
                <div className="p-0 m-0">
                  <span>{props.data.description}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="todays-right-side col-sm-6">
            <ul className="todays-stats">
              <li>
                <span className="material-symbols-outlined">water_drop</span>{" "}
                Humidity:
                <span className="stat">
                  <span className="data"> {props.data.humidity}%</span>
                </span>
              </li>
              <li>
                <span className="material-symbols-outlined">air</span> Wind
                speed:
                <span className="stat">
                  <span className="data"> {props.data.wind} Km/h</span>
                </span>
              </li>
              <WindDegree degree={props.data.degree} />
              <Pressure pressure={props.data.pressure} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
