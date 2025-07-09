import React, { useState, useEffect, useCallback } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { RotatingLines } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const city = props.city;

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      feelslike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      degree: response.data.wind.degree,
      pressure: response.data.temperature.pressure,
      icon: response.data.condition.icon_url,
    });
  }

  const getWeather = useCallback(() => {
    const apiKey = `a2t477eebb3f98daaa0d6cf85ob51907`;
    const units = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }, [city]);

  useEffect(() => {
    setWeatherData({ ready: false });
    getWeather();
  }, [getWeather]);

  if (weatherData.ready) {
    return (
      <div>
        <WeatherInfo data={weatherData} city={props.city} unit={props.unit} />
        <div className="Forecast">
          <div className="box">
            <div className="divider-wrapper">
              <div className="divider">
                <h3>5-day forecast</h3>
              </div>
            </div>
            <WeatherForecast city={props.city} />
          </div>
        </div>
      </div>
    );
  } else {
    getWeather();
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 loader">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="#005792"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    );
  }
}
