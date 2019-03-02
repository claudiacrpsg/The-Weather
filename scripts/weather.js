document.getElementById("searching").addEventListener("click", () => search())

function search() {
    var value = document.getElementById("userInput").value;
    console.log(value);

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value + '&APPID=b30768ed016b2bc227f085606714367f')
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
    console.log("hey")
    var weatherTiles = document.getElementById("weatherTiles");
    var data = data;
    var template = "";
    for (var i = 0; i < data.length; i++) {
        template += `  
    <div>
    <div class="tile">
    </div>
    <h6>${data[i].name}</h6>
</div>
`;
        weatherTiles.innerHTML = template;

    }
}