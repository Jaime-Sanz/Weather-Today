import './styles.css';

const API_KEY = '0ade93a78b6c4f04b7d23501240502';


function getWeather(cityName){
    const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&days=3`;

    fetch(URL)
        .then(response => response.json())
        .then(data => {
           console.log(data);
        })
    
}


getWeather("Bell Gardens");