import React from 'react';
import { IWeatherData } from '../../utils';

const WeatherDisplay: React.FC<{ weatherData: IWeatherData }> = ({
    weatherData: {
        name,
        sys: {
            country
        },
        main: {
            temp, humidity
        },
        weather,
        wind,
        visibility
    }}) => {
    return (
        <div>
            <h2>{name}, {country}</h2>
            <p>Temperature: {temp}°C</p>
            <p>Weather: {weather[0].main}</p>
            <p>Description: {weather[0].description}</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind speed: {wind.speed} meter/sec</p>
            <p>Visibility: {visibility} meters, {visibility / 100}%</p>
        </div>
    );
};

export default WeatherDisplay;