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
    cityName.append(data.name + ", " + data.sys.country);
    temperature.append((data.main.temp).toFixed(0));
    description.append(data.weather[0].description);
}