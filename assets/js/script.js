var formSearchEl = document.querySelector("#formSearch");
var citySearchEl = document.querySelector("#citySearch");

var searchBtnEl = document.querySelector("#searchBtn");

var apiFront = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiBack = "&appid=639e73227e908c5498c3c5be9b183ef8&units=imperial";

// var curdat = new Date(null); ;     This will convert seconds to date/time
// curdat.setTime(1615785250 * 1000);
// alert(curdat.toLocaleString());

//http://openweathermap.org/img/wn/10d@2x.png  //This is the link for the icons

var apiForecastFront = "https://api.openweathermap.org/data/2.5/forecast?q="



function searching(event) {
    event.preventDefault();

    var userCitySearch = citySearchEl.value.trim();
    var weatherAPI = apiFront + userCitySearch + apiBack;
    
    console.log('You are in the function');
    fetch(weatherAPI)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        document.querySelector("#one").innerHTML = 
        `
        <ul>
        <li> Date:  ${data.dt} </li>
        <li> Name:  ${data.name} </li>
        <li> Description:  ${data.weather[0].icon} </li>
        <li> Temp:  ${data.main.temp} </li>
        <li> Humidity:  ${data.main.humidity}% </li>
        <li> Wind Speed:  ${data.wind.speed} MPH </li>
        <li> UV Index:  ${data.main.temp} </li>
        <li> Weather:  ${data.weather[0].main} </li>
        </ul>
        `
    citySearchEl.textContent = "";    
    })
    
}

function forecasting(event) {
    event.preventDefault();

    var userCitySearch = citySearchEl.value.trim();
    var forecastWeatherAPI = apiForecastFront + userCitySearch + apiBack;
    
    console.log('You are in the function');
    fetch(forecastWeatherAPI)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        document.querySelector("#two").innerHTML = 
        `
        <ul>
        <li> date:  ${data.list[1].dt_txt} </li>
        <li> Description:  ${data.list[1].weather[0].icon} </li>
        <li> Temp:  ${data.list[1].main.temp} </li>
        <li> Humidity:  ${data.list[1].main.humidity}% </li>
        </ul>
        `

        document.querySelector("#three").innerHTML = 
        `
        <ul>
        <li> date:  ${data.list[9].dt_txt} </li>
        <li> Description:  ${data.list[1].weather[0].icon} </li>
        <li> Temp:  ${data.list[9].main.temp} </li>
        <li> Humidity:  ${data.list[9].main.humidity}% </li>
        </ul>
        `

        document.querySelector("#four").innerHTML = 
        `
        <ul>
        <li> date:  ${data.list[17].dt_txt} </li>
        <li> Description:  ${data.list[1].weather[0].icon} </li>
        <li> Temp:  ${data.list[17].main.temp} </li>
        <li> Humidity:  ${data.list[17].main.humidity}% </li>
        </ul>
        `

        document.querySelector("#five").innerHTML = 
        `
        <ul>
        <li> date:  ${data.list[25].dt_txt} </li>
        <li> Description:  ${data.list[1].weather[0].icon} </li>
        <li> Temp:  ${data.list[25].main.temp} </li>
        <li> Humidity:  ${data.list[25].main.humidity}% </li>
        </ul>
        `

        document.querySelector("#six").innerHTML = 
        `
        <ul>
        <li> ${data.list[33].dt_txt} </li>
        <li> Description:  ${data.list[1].weather[0].icon} </li>
        <li> Temp:  ${data.list[33].main.temp} </li>
        <li> Humidity:  ${data.list[33].main.humidity}% </li>
        </ul>
        `


        
    })
   
}










formSearchEl.addEventListener("submit", forecasting);
formSearchEl.addEventListener("submit", searching);



// fetch("https://api.openweathermap.org/data/2.5/weather?q=El Paso&appid=639e73227e908c5498c3c5be9b183ef8&units=imperial")
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data);
//     document.querySelector("p").innerHTML = 
//     `
//     <ul>
//     <li> Name:  ${data.name} </li>
//     <li> Temp:  ${data.main.temp} </li>
//     <li> Humidity:  ${data.main.humidity}% </li>
//     <li> Wind Speed:  ${data.wind.speed} MPH </li>
//     <li> UV Index:  ${data.main.temp} </li>


//     </ul>
//     `
// })

