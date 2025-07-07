import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let cityData = {
    city: "Manchester",
    country: "United Kingdom",
    date: "5th July, 2025 16:11",
    emoji: "⛅",
    temperature: 18,
    feels: 18,
    description: "broken clouds",
    wind: 3.6,
    direction: "WNW (290)",
    humidity: 84,
    pressure: "normal (1011)",
  };

  return (
    <div className="Weather">
      <div className="location box">
        <h1>
          <span>{cityData.city}</span>
        </h1>
        <h2>
          <span>{cityData.country}</span>
        </h2>
      </div>
      <div className="current box">
        <div className="divider-wrapper">
          <div className="split-text divider">
            <h3>Current weather</h3>
            <h3>{cityData.date}</h3>
          </div>
        </div>
        <div className="split-text">
          <div className="todays-left-side todays-content">
            <div>
              {/* <img src="#" alt="weather-icon" className="todays-icon" /> */}
              <div className="todays-emoji-icon">{cityData.emoji}</div>
            </div>
            <div className="temp">
              <span className="todays-temp stat data">
                {cityData.temperature}
              </span>
              <span className="todays-temp-unit stat">°C</span>
              <br />
              Feels like
              <span className="stat">
                <span className="data"> {cityData.feels}</span>
                °C
              </span>
              <div className="todays-description">
                <span>{cityData.description}</span>
              </div>
            </div>
          </div>

          <div className="todays-right-side">
            <ul className="todays-stats">
              <li>
                <span className="material-symbols-outlined">air</span> Wind
                speed:
                <span className="stat">
                  <span className="data"> {cityData.wind} Km/h</span>
                </span>
              </li>
              <li>
                <span className="material-symbols-outlined">flag</span> Wind
                from:
                <span className="stat">
                  <span className="data"> {cityData.direction}</span>
                </span>
              </li>
              <li>
                <span className="material-symbols-outlined">water_drop</span>{" "}
                Humidity:
                <span className="stat">
                  <span className="data"> {cityData.humidity}%</span>
                </span>
              </li>
              <li>
                <span className="material-symbols-outlined">thunderstorm</span>{" "}
                Pressure:
                <span className="stat">
                  <span className="data"> {cityData.pressure}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Forecast">
        <div className="box">
          <div className="divider-wrapper">
            <div className="divider">
              <h3>5-day forecast</h3>
            </div>
          </div>
          <div id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
