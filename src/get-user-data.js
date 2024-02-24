import { displayUserData } from "./display-user-data";

const API_KEY = '0ade93a78b6c4f04b7d23501240502';

export function getWeather(cityName) {
    const URL = `https://api.weatherapi.com/v1/forecast.json?q=${cityName}&days=3&key=${API_KEY}`;

    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            sortUserData(data);
            console.log(data)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function sortUserData (userData){
    const weatherInfo = [];
    userData.forecast.forecastday.forEach(dayData => {
        const day = dayData.date;
        const hightemperature = dayData.date.maxtemp_f;
        const lowtemperature = dayData.date.mintemp_f
        const condition = dayData.day.condition.text;
        
        const dayWeather = {day, hightemperature, lowtemperature, condition};
        weatherInfo.push(dayWeather);
    });
    displayUserData(weatherInfo);
}