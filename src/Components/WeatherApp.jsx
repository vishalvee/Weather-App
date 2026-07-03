import { useState } from "react";
import axios from "axios";
const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
    console.log(city);
  };

  const apiKey = import.meta.env.VITE_API_KEY;
  const handleClick = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
      );
      setWeather(res);
      console.log(res);
      console.log(import.meta.env.VITE_API_KEY)
      setCity("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="main">
        <input
          type="text"
          placeholder="Enter the City"
          value={city}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Check-Weather</button>
      </div>

      <div className="Display-container">
        {weather && (
          <>
            <h1>City :- {weather.data.name}</h1>
            <h3>Country: {weather.data.sys.country}</h3>
            <h3>Temp: {weather.data.main.temp}</h3>
            <h2>Description: {weather.data.weather[0].description}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
