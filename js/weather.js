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
            const weatherContainer = document.querySelector("#weatherContainer");

            const cityContainer = weatherContainer.querySelector("#cityContainer");
            const city = cityContainer.querySelector("#city");
            const weather = cityContainer.querySelector("#weather");
            const weatherIcon = cityContainer.querySelector("#icon-weather");
            
            const tempContainer = weatherContainer.querySelector("#tempContainer");
            const humiditiy = tempContainer.querySelector("#humidity");
            const temp = tempContainer.querySelector("#temp");
        
            weatherIcon.src = `./img/weather/${data.weather[0].icon}.png`;
            city.innerText = `${data.name}`;
            weather.innerText = `${data.weather[0].main}`;
            humiditiy.innerText = `${data.main.humidity}%`;
            temp.innerText = `${Math.round(data.main.temp)} 'C`;

            weatherContainer.classList.remove("hidden");
        });
}

function onGeoError() {
    alert ("Can't find your location. Fail to get weather info.");
}
