import './styles.css';
import { getWeather } from './get-user-data';

document.getElementById('locationWeather').addEventListener('submit', function(event){
    event.preventDefault();
    let userLocation = document.getElementById('userLocation').value;
    getWeather(userLocation);
});

let d = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekDay = days[d.getDay()];
console.log(weekDay);