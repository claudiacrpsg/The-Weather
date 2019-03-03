document.getElementById("searching").addEventListener("click", () => search());
document.getElementById("weatherTiles").style.display = ""; //fix this

function search() {
    var value = document.getElementById("userInput").value;
    console.log(value);

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value + '&units=metric&APPID=b30768ed016b2bc227f085606714367f')
        .then((res) => res.json())
        .then((json) => {
            data = json;
            console.log(data);
            weather(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

function weather(data) {
    var weatherTiles = document.getElementById("weatherTiles");
    var cityName = document.getElementById("cityName");
    var temperature = document.getElementById("temperature");
    var maxTemperature = document.getElementById("maxTemperature");
    var minTemperature = document.getElementById("minTemperature");
    var description = document.getElementById("description");
    var weatherImage = document.getElementById("weatherImage");
    var extraInfo = document.getElementById("extraInfo");
    if (data.cod == "404") {
        cityName.style.display = "none";
        temperature.style.display = "none";
        maxTemperature.style.display = "none";
        minTemperature.style.display = "none";
        description.style.display = "none";
        var img = document.createElement("img");
        img.className = "confused";
        img.src = "styles/confused.png";
        weatherImage.append(img);
        document.getElementById("cityNotFound").style.display = "block";
    } else {
        cityName.append("City: " + data.name + ", " + data.sys.country);
        temperature.append("Current temperature: " + (data.main.temp).toFixed(0) + "°C");
        maxTemperature.append("Max temperature: " + (data.main.temp_max).toFixed(0) + "°C");
        minTemperature.append("Min temperature: " + (data.main.temp_min).toFixed(0) + "°C");
        description.append("Weather conditions: " + data.weather[0].description);
        
        if(data.weather[0].description.includes("rain")){
            var img = document.createElement("img");
            img.className = "scattered_clouds";
            img.src = "styles/rain.png";
            weatherImage.append(img);
            extraInfo.append("Don't forget your umbrella!");
        }

        if (data.weather[0].description.includes("clouds")) {
            var img = document.createElement("img");
            img.className = "scattered_clouds";
            img.src = "styles/scattered_clouds.png";
            weatherImage.append(img);
        }
        if (data.weather[0].description.includes("clear sky")) {
            var img = document.createElement("img");
            img.className = "clear_sky";
            img.src = "styles/clear_sky.png";
            weatherImage.append(img);
            extraInfo.append("Enjoy the sunny day!");
        }
        if (data.weather[0].description.includes("snow")) {
            var img = document.createElement("img");
            img.className = "snow";
            img.src = "styles/snow.png";
            weatherImage.append(img);
            extraInfo.append("Mind the icy roads!");
        }
        if (data.weather[0].description.includes("few clouds")) {
            var img = document.createElement("img");
            img.className = "few_clouds";
            img.src = "styles/few_clouds.png";
            weatherImage.append(img);
        }
        if (data.weather[0].description.includes("fog")) {
            var img = document.createElement("img");
            img.className = "fog";
            img.src = "styles/fog.png";
            weatherImage.append(img);
        }
        if (data.weather[0].description.includes("thunderstorm")) {
            var img = document.createElement("img");
            img.className = "thunderstorm";
            img.src = "styles/storm.png";
            weatherImage.append(img);
        }
    }
}