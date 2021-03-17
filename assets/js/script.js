var yourApiKey = "639e73227e908c5498c3c5be9b183ef8";
var dailyForecastEl = document.querySelector("#one");
var ultraVEl = document.querySelector("#ultraV");

var formSearchEl = document.querySelector("#formSearch");
var citySearchEl = document.querySelector("#citySearch");

var searchBtnEl = document.querySelector("#searchBtn");

var iconOneEl = document.querySelector("#iconOne");         //These are not being used
var iconTwoEl = document.querySelector("#iconTwo");
var iconThreeEl = document.querySelector("#iconThree");
var iconFourEl = document.querySelector("#iconFour");
var iconFiveEl = document.querySelector("#iconFive");
var iconSixEl = document.querySelector("#iconSix");         //These are not being used

var iconFront = "http://openweathermap.org/img/wn/";
var iconBack  = "@2x.png";

var apiFront = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiBack = "&appid=" + yourApiKey + "&units=imperial";

// var curdat = new Date(null); ;                               //This will convert seconds to date/time
// curdat.setTime(1615785250 * 1000);
// alert(curdat.toLocaleString());

//http://openweathermap.org/img/wn/10d@2x.png                   //This is the link for the icons

var apiForecastFront = "https://api.openweathermap.org/data/2.5/forecast?q=";


//var uviLat;
//var uviLon;
var oneCallApi;
var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=";





function searching(event) {                                             //This function is the current day forecast.
    event.preventDefault();

    var userCitySearch = citySearchEl.value.trim();
    var weatherAPI = apiFront + userCitySearch + apiBack;
    
    console.log("You are in the searching function");
    fetch(weatherAPI) 
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        var uviLat = `${data.coord.lat}`;
        var uviLon = `${data.coord.lon}`;
        console.log(uviLat);
        console.log(uviLon);
        var daIcon = `${data.weather[0].icon}`; 
        iconOneEl.src = iconFront + daIcon + iconBack;
        console.log("You are in the searching function" + data);
        dailyForecastEl.innerHTML = 
        `
        <ul>
        <li> Date:  ${data.dt} </li>
        <li> Name:  ${data.name} </li>
        <li> Description:  ${data.weather[0].icon}</li>
        <li> Temp:  ${data.main.temp} &#8457 </li>
        <li> Humidity:  ${data.main.humidity}% </li>
        <li> Wind Speed:  ${data.wind.speed} MPH </li>
        <li> UV Index:  ${data.main.temp} </li>
        <li> Weather:  ${data.weather[0].main} </li>
        </ul>
        `
        // var iconOneEl = document.querySelector('#iconOne');
        // var iconFront = "http://openweathermap.org/img/wn/";
        // var iconBack  = "@2x.png";
        



        ultraVioletIndex(uviLat, uviLon);
              
    })

    
    
}

function forecasting(event) {                                                   //This function starts the 5 day forecast.
    event.preventDefault();

    var userCitySearch = citySearchEl.value.trim();
    var forecastWeatherAPI = apiForecastFront + userCitySearch + apiBack;
    
    console.log("You are in the function");
    fetch(forecastWeatherAPI)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log("You are in the 5 day Forecast" + data);
        var daIcon2 = `${data.list[2].weather[0].icon}`;                        //This block of code will gather the icon code numbers from data 
        // iconTwoEl.src = iconFront + daIcon2 + iconBack;                         //and get the weather icons from the website.

        var daIcon3 = `${data.list[10].weather[0].icon}`; 
        // iconThreeEl.src = iconFront + daIcon3 + iconBack;

        var daIcon4 = `${data.list[18].weather[0].icon}`; 
        //iconFourEl.src = iconFront + daIcon4 + iconBack;

        var daIcon5 = `${data.list[26].weather[0].icon}`; 
        //iconFiveEl.src = iconFront + daIcon5 + iconBack;

        var daIcon6 = `${data.list[34].weather[0].icon}`; 
        //iconSixEl.src = iconFront + daIcon6 + iconBack;

   
        document.querySelector("#two").innerHTML =                              //Data pull for day one of five day. 12noon
        `                                                                           
        <ul>
        <li> date:  ${data.list[2].dt_txt} </li>
        <li> <img src= ${iconFront + daIcon2 + iconBack}> </li>
        <li> Description:  ${data.list[2].weather[0].icon} </li>
        <li> Temp:  ${data.list[2].main.temp} &#8457 </li>
        <li> Humidity:  ${data.list[2].main.humidity}% </li>
        </ul>
        `
           

        document.querySelector("#three").innerHTML =                            //Data pull for day two of five day. 12noon
        `
        <ul>
        <li> date:  ${data.list[10].dt_txt} </li>
        <li> <img src= ${iconFront + daIcon3 + iconBack}> </li>
        <li> Description:  ${data.list[10].weather[0].icon} </li>
        <li> Temp:  ${data.list[10].main.temp} &#8457 </li>
        <li> Humidity:  ${data.list[10].main.humidity}% </li>
        </ul>
        `

        document.querySelector("#four").innerHTML =                            //Data pull for day three of five day. 12noon
        `
        <ul>
        <li> date:  ${data.list[18].dt_txt} </li>
        <li> <img src= ${iconFront + daIcon4 + iconBack}> </li>
        <li> Description:  ${data.list[18].weather[0].icon} </li>
        <li> Temp:  ${data.list[18].main.temp} &#8457 </li>
        <li> Humidity:  ${data.list[18].main.humidity}% </li>
        </ul>
        `

        document.querySelector("#five").innerHTML =                             //Data pull for day four of five day. 12noon
        `
        <ul>
        <li> date:  ${data.list[26].dt_txt} </li>
        <li> <img src= ${iconFront + daIcon5 + iconBack}> </li>
        <li> Description:  ${data.list[26].weather[0].icon} </li>
        <li> Temp:  ${data.list[26].main.temp} &#8457 </li>
        <li> Humidity:  ${data.list[26].main.humidity}% </li>
        </ul>
        `

        document.querySelector("#six").innerHTML =                               //Data pull for day five of five day.
        `
        <ul>
        <li> ${data.list[34].dt_txt} </li>
        <li> <img src= ${iconFront + daIcon6 + iconBack}> </li>
        <li> Description:  ${data.list[34].weather[0].icon} </li>
        <li> Temp:  ${data.list[34].main.temp} &#8457 </li>
        <li> Humidity:  ${data.list[34].main.humidity}% </li>
        </ul>
        `
        
    })


  
}


function ultraVioletIndex(uviLat, uviLon) {  
    console.log(uviLat);                                                 //This function starts the 5 day forecast.
        
    oneCallApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + 
    uviLat + "&lon=" + uviLon + "&exclude=alerts&appid=" +
    yourApiKey;

    //var userCitySearch = citySearchEl.value.trim();
    //var forecastWeatherAPI = apiForecastFront + userCitySearch + apiBack;
       
    fetch(oneCallApi)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log("You are in the UVI");   
        console.log(data);
        console.log(data.current.uvi);
        ultraVEl.innerHTML = `
        <ul>
        <li>UV Index:  ${data.current.uvi}</li>
        <ul>

        `; 
        if(data.current.uvi >= 6) {
            ultraVEl.style.background = "red";
        } else if (data.current.uvi <= 2) {
            ultraVEl.style.background = "green"; 
        } else {
            ultraVEl.style.background = "yellow"; 
        };
            

     



    })
}


formSearchEl.addEventListener("submit", forecasting);
formSearchEl.addEventListener("submit", searching);
//formSearchEl.addEventListener("submit", ultraVioletIndex);


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

