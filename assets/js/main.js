let key = "9c505c1fe59fd17da7bdf6969744f2c7";

function putDataOnScreen(dados){
    console.log(dados);
    document.querySelector('.city').innerHTML = "Tempo em " + dados.name;
    document.querySelector('.celsius').innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector('.weather').innerHTML = dados.weather[0].description;
    document.querySelector('.moisture').innerHTML = "Umidade " + dados.main.humidity + "%";
    document.querySelector('.img-predict').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function searchCity(city){

    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={${city}}&appid={${key}}&lang=pt_br&units=metric`)
        .then(response => response.json());

    putDataOnScreen(data);
}

function pressButton(){
    let city = document.querySelector('.input-search').value;
    searchCity(city);
}