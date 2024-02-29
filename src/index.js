import './styles.css';
import { getWeather } from './get-user-data';

document.getElementById('locationWeather').addEventListener('submit', function(event){
    event.preventDefault();
    let userLocation = document.getElementById('userLocation').value;
    let formWeather = document.getElementById('locationWeather');
    let containerBlocks = document.getElementById('weather-blocks');

    while (containerBlocks.firstChild) {
        containerBlocks.removeChild(containerBlocks.firstChild);
    }

    getWeather(userLocation);    
});