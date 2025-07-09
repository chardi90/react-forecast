import React from "react";
import FormattedForecastDate from "./WeatherForecastDate";
import FormattedForecastDay from "./WeatherForecastDay";

export default function WeatherForecast() {
  return (
    <div className="Forecast">
      <ul>
        <li>
          <span className="day-date">
            {/* <span className="day" id="day-0">
             {WeatherForecastDay(day.time)} 
            </span> */}
            <div className="date" id="date-0">
              {/*{WeatherForecastDate(day.time)}*/}
            </div>
          </span>

          <span className="temp">
            <div className="material-symbols-outlined">thermometer</div>
            <div className="stat data">
              {/*{Math.round(day.temperature.maximum)}°C{" "}*/}
              <span className="temp-feels">
                {/*{Math.round(day.temperature.minimum)}°C*/}
              </span>
            </div>
          </span>

          <span className="forecast-icon">
            {/*<img
              src=`${day.condition.icon_url}`
              alt="weather-icon"
              className="forecast-icon"
            />*/}
          </span>

          <span className="conditions">
            <div className="material-symbols-outlined"></div>
            {/* <div className="description">{day.condition.description}</div>*/}
          </span>

          <span className="wind">
            <div className="material-symbols-outlined">air</div>
            {/*<div className="stat data">{day.wind.speed}Km/h</div>*/}
          </span>

          <span className="humidity">
            <div className="material-symbols-outlined">water_drop</div>
            {/* <div className="humity stat data">{day.temperature.humidity}%</div>*/}
          </span>
        </li>
      </ul>
    </div>
  );
}
