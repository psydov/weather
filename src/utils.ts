export const API_KEY = 'fa1e72ff893c6a4a5ed4077327e855b4';
export const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export interface IWeatherData{
    "coord": {
        "lon": number,
        "lat": number
    },
    "weather": 
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        }[]
    ,
    "base": string,
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max":number,
        "pressure": number,
        "humidity": number
    },
    "visibility": number,
    "wind": {
        "speed": number,
        "deg": number
    },
    "clouds": {
        "all":number
    },
    "dt": number,
    "sys": {
        "type": number,
        "id": number,
        "country": string,
        "sunrise": number,
        "sunset": number
    },
    "timezone":number,
    "id": number,
    "name": string,
    "cod": number
}