const key = "9c505c1fe59fd17da7bdf6969744f2c7";

function putDataOnScreen(data){
    console.log(data);
    document.querySelector('.city').innerHTML = "Tempo em " + data.name;
    document.querySelector('.celsius').innerHTML = Math.floor(data.main.temp) + "ºC";
    document.querySelector('.weather').innerHTML = data.weather[0].description;
    document.querySelector('.moisture').innerHTML = "Umidade " + data.main.humidity + "%";
    document.querySelector('.img-predict').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function searchCity(city){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={${city}}&appid={${key}}&lang=pt_br&units=metric`)
        .then(response => response.json());

    putDataOnScreen(data);
}

function pressButton(){
    const city = document.querySelector('.input-search').value;
    searchCity(city);
}