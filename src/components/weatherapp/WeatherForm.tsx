import React, { FormEvent, useState } from "react";
import { API_KEY, BASE_URL, IWeatherData } from "../../utils";
import WeatherDisplay from "./WeatherDisplay";

const WeatherForm = () => {
  const [weatherData, setWeatherData] = useState<null | IWeatherData>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const city = e.currentTarget.city.value.trim();
    fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data: IWeatherData) => data && setWeatherData(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder="Enter city..." />
        <button type="submit">Get weather</button>
      </form>

      {
        // weatherData?.name && <WeatherDisplay weatherData={weatherData} />
        weatherData && <WeatherDisplay weatherData={weatherData} />
      }
    </>
  );
};

export default WeatherForm;
