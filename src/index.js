import './styles.css';
import { getWeather } from './userdata';

document.getElementById('locationWeather').addEventListener('submit', function(event){
    event.preventDefault();
    let userLocation = document.getElementById('userLocation').value;
    getWeather(userLocation);
});