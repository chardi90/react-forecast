import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather();
  }, [city]);

  function getWeather() {
    const apiKey = `a2t477eebb3f98daaa0d6cf85ob51907`;
    const units = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then((response) => {
      setWeatherData({
        country: response.data.country,
        date: "5th July, 2025 16:11",
        temperature: response.data.temperature.current,
        feelslike: response.data.temperature.feels_like,
        description: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        direction: response.data.wind.degree,
        pressure: response.data.temperature.pressure,
        icon: response.data.condition.icon_url,
      });
    });
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Weather">
      <div className="location box">
        <h1>
          <span>{city}</span>
        </h1>
        <h2>
          <span>{weatherData.country}</span>
        </h2>
      </div>
      <div className="current box">
        <div className="divider-wrapper">
          <div className="split-text divider">
            <h3>Current weather</h3>
            <h3>{weatherData.date}</h3>
          </div>
        </div>
        <div className="split-text">
          <div className="todays-left-side todays-content">
            <div>
              <img
                src={weatherData.icon}
                alt="weather-icon"
                className="todays-icon"
              />
            </div>
            <div className="temp">
              <span className="todays-temp stat data">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="todays-temp-unit stat">°C</span>
              <br />
              <span className="p-0 m-0">
                feels like
                <span className="stat">
                  <span className="data">
                    {" "}
                    {Math.round(weatherData.feelslike)}
                  </span>
                  °C
                </span>
              </span>
              <div className="p-0 m-0">
                <span>{weatherData.description}</span>
              </div>
            </div>
          </div>

          <div className="todays-right-side">
            <ul className="todays-stats">
              <li>
                <span className="material-symbols-outlined">air</span> Wind
                speed:
                <span className="stat">
                  <span className="data"> {weatherData.wind} Km/h</span>
                </span>
              </li>
              <li>
                <span className="material-symbols-outlined">flag</span> Wind
                from:
                <span className="stat">
                  <span className="data"> {weatherData.direction}</span>
                </span>
              </li>
              <li>
                <span className="material-symbols-outlined">water_drop</span>{" "}
                Humidity:
                <span className="stat">
                  <span className="data"> {weatherData.humidity}%</span>
                </span>
              </li>
              <li>
                <span className="material-symbols-outlined">thunderstorm</span>{" "}
                Pressure:
                <span className="stat">
                  <span className="data"> {weatherData.pressure}</span>
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
