import React, { useState, useEffect, useCallback } from "react";
import FormattedForecastDay from "./WeatherForecastDay";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
  }

  const getForecast = useCallback(() => {
    const apiKey = `a2t477eebb3f98daaa0d6cf85ob51907`;
    const units = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.city]);

  useEffect(() => {
    setForecastData(null);
    getForecast();
  }, [getForecast]);

  if (forecastData) {
    return (
      <div className="Forecast">
        {forecastData.slice(0, 5).map((dailyForecast, index) => (
          <FormattedForecastDay
            key={index}
            data={dailyForecast}
            unit={props.unit}
          />
        ))}
      </div>
    );
  } else {
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
