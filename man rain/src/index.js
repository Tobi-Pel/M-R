import { GetCurrentWeather , GetWeeklyWeather} from "./services";
import { changeTabs } from "./theme";

async function main() {
    let weatherImg = document.querySelectorAll('.weather-img');
    let weatherCelcius = document.querySelector('.celcius-value');
    let weatherWind = document.querySelector('.wind-value');
    let weatherRain = document.querySelector('.rain-value');
    let dataElement = document.querySelectorAll('.temp');
    changeTabs();
    let currentWeather = await GetCurrentWeather();
    let weeklyWeather = await GetWeeklyWeather();

    weatherCelcius.innerHTML = "Temperature of weather : " + currentWeather.temperature_2m + '°C';
    weatherRain.innerHTML = 'Rain : ' + (currentWeather.rain ? "Yes" : "No");
    weatherWind.innerHTML = "Wind speed : " + currentWeather.windspeed_10m + ' km/h';
    if(currentWeather.snowfall != 0) weatherImg[0].src = "ascets/snowy.png";
    else if(currentWeather.rain != 0) weatherImg[0].src = "ascets/rain.png";
    else if(currentWeather.is_day === 0 && currentWeather.cloudcover >= 100)  weatherImg[0].src = "ascets/cloudy.png";
    else if(currentWeather.is_day != 0 && currentWeather.cloudcover >= 100) weatherImg[0].src = "ascets/sunny-with-cloudy.png";
    else weatherImg[0].src = "ascets/sunny.png";

    for(let i = 0; i < dataElement.length;i++) dataElement[i].innerText = weeklyWeather.daily.time[i+1].substring(5 , 12);
    for(let i = 0; i < dataElement.length;i++) dataElement[i].innerHTML += '<br>';
    for(let i = 0; i < dataElement.length;i++) dataElement[i].innerText += weeklyWeather.daily.apparent_temperature_max[i] + '°C';

    for(let i = 1; i < weatherImg.length;i++) weatherImg[i].src = 'ascets/sunny.png'; 
    for(let i = 1; i < weatherImg.length;i++) if(weeklyWeather.daily.rain_sum[i] > 1) weatherImg[i].src = 'ascets/rain.png';
    for(let i = 1; i < weatherImg.length;i++) if(weeklyWeather.daily.snowfall_sum[i] > 0) weatherImg[i].src = 'ascets/snowy.png';     
}

main();