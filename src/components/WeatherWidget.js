// src/components/WeatherWidget.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "/home/mriganka/projects/up-tourism/src/styles/WeatherWidget.css";

function WeatherWidget({ city }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75eff193dbf40e80f8bc8522e1ab025e`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    fetchWeather();
  }, [city]);

  return (
    <div className="weather-widget">
      {weather ? (
        <div>
          <h3>Weather in {city}</h3>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}

export default WeatherWidget;
