document.getElementById("searching").addEventListener("click", () => search())

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
    var cityName = document.getElementById("cityName");
    var temperature = document.getElementById("temperature");
    var description = document.getElementById("description");
    var weatherImage = document.getElementById("weatherImage");
    cityName.append(data.name + ", " + data.sys.country);
    temperature.append((data.main.temp).toFixed(0) + "°C");
    description.append(data.weather[0].description);
    if((data.weather[0].description == "scattered clouds") || (data.weather[0].description == "broken clouds") ){
        var img = document.createElement("img");
        img.className = "scattered_clouds";
        img.src = "styles/scattered_clouds.png";
        weatherImage.append(img);
    }
    if(data.weather[0].description == "clear sky"){
        var img = document.createElement("img");
        img.className = "clear_sky";
        img.src = "styles/clear_sky.png";
        weatherImage.append(img);
    }
    if(data.weather[0].description == "few clouds"){
        var img = document.createElement("img");
        img.className = "few_clouds";
        img.src = "styles/few_clouds.png";
        weatherImage.append(img);
    }
    if(data.weather[0].description == "snow" || data.weather[0].description == "light snow"){
        var img = document.createElement("img");
        img.className = "snow";
        img.src = "styles/snow.png";
        weatherImage.append(img);
    }
}