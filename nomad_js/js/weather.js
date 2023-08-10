const KEY_API = "a31c289456b9bea07a39e779909c4a16"; 

function onGeoOk (position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY_API}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const cityContainer = document.querySelector("#weather span:last-child");
            cityContainer.innerText = data.name;
            weatherContainer.innerText  = `${data.weather[0].main} / ${data.main.temp}` ;
        })
}


function onGeoError () {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

