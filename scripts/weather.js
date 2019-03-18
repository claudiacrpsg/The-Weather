document.getElementById("searching").addEventListener("click", () => search());

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
    document.getElementById("userInput").value = "";
    document.getElementById("weatherInfo").innerHTML = "";
   
    var weatherInfo = document.getElementById("weatherInfo");
    var cityName = document.createElement("h5");
    var temperature = document.createElement("h5");
    var maxTemperature = document.createElement("h5");
    var minTemperature = document.createElement("h5");
    var description = document.createElement("h5");

    if (data.cod == "404") {
        cityName.append("No results matched your search! Please try again.");
        weatherInfo.append(cityName);
    } else {
        cityName.append("City: " + data.name + ", " + data.sys.country);
        temperature.append("Current temperature: " + (data.main.temp).toFixed(0) + "°C");
        maxTemperature.append("Max temperature: " + (data.main.temp_max).toFixed(0) + "°C");
        minTemperature.append("Min temperature: " + (data.main.temp_min).toFixed(0) + "°C");
        description.append("Weather conditions: " + data.weather[0].description);
        weatherInfo.append(cityName, temperature, maxTemperature, minTemperature, description);
    }
}