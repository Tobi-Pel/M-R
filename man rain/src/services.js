export async function GetWeather() {
    try {
        let response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day,rain,snowfall,cloudcover,windspeed_10m&hourly=temperature_2m');
        let result = await (response.json());
        
        console.log(result);
        return result;
    }
    catch(err){
        return String(err);
    }
};

export async function GetWeatherWeek() {
    try {
        let response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=apparent_temperature_max,rain_sum,snowfall_sum,windspeed_10m_max&timezone=auto');
        let result = await (response.json());
        
        return result;
    }
    catch(err){
        return String(err);
    }
};

export async function GetCurrentWeather() {
    let circle = document.querySelector('.circle');
    let loader = document.querySelector('.loader');
    let id = setInterval(changeColor, 820);

    function changeColor() {
        if(loader.className !== 'loader') {
            clearInterval(id);
        } else {
            const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
            circle.style.borderColor = randomColor;
            circle.style.borderTopColor = '#fff';
        };
    };

    let response = await GetWeather();
    let responseWeek = await GetWeatherWeek();
    let current = null;
    
    if(typeof response === 'string' && responseWeek === 'string') {
        current = response;
    } else {
        current = response.current;
        loader.className += ' disabled';
    }

    return current;
};

export async function GetWeeklyWeather(){
    let response = await GetWeatherWeek();
    return response;
}