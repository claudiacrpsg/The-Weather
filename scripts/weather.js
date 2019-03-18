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

    var weatherTiles = document.getElementById("weatherTiles");

    var cityName = document.getElementById("cityName");
    var temperature = document.getElementById("temperature");
    var maxTemperature = document.getElementById("maxTemperature");
    var minTemperature = document.getElementById("minTemperature");
    var description = document.getElementById("description");
    if (data.cod == "404") {
      
        cityName.style.display = "none";
        temperature.style.display = "none";
        maxTemperature.style.display = "none";
        minTemperature.style.display = "none";
        description.style.display = "none";
        document.getElementById("cityNotFound").style.display = "block";
    } else {
        
        cityName.append("City: " + data.name + ", " + data.sys.country);
        temperature.append("Current temperature: " + (data.main.temp).toFixed(0) + "°C");
        maxTemperature.append("Max temperature: " + (data.main.temp_max).toFixed(0) + "°C");
        minTemperature.append("Min temperature: " + (data.main.temp_min).toFixed(0) + "°C");
        description.append("Weather conditions: " + data.weather[0].description);
        weatherTiles.append(cityName, temperature, maxTemperature, minTemperature, description);
    }
    
}