const currPosition = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
const WEATHER_API_KEY = '9c386f6d3233a1be1a3c3ca9763a843e';

function onGeoOk(pos) {
    const lat = pos.coords.latitude;
    const lon= pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    fetch(url)
        .then((resp) => 
            resp.json()
        )
        .then((data) => {
            const weatherContainer = document.querySelector("#weather");
            const city = document.createElement("span");
            const weather = document.createElement("span");
            const humiditiy = document.createElement("span");
            const temp = document.createElement("span");
            
            
            city.innerText = `${data.name}`;
            weather.innerText = `${data.weather[0].main}`;
            humiditiy.innerText = `Humidity: ${data.main.humidity}`;
            temp.innerText = `Temperature: ${Math.round(data.main.temp)} C `;
            
            weatherContainer.appendChild(city);
            weatherContainer.appendChild(weather);
            weatherContainer.appendChild(humiditiy);
            weatherContainer.appendChild(temp);
        });
}

function onGeoError() {
    alert ("Can't find your location. Fail to get weather info.");
}
