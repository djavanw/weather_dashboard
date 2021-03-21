//Variables jQuery and JS   
var yourApiKey = "639e73227e908c5498c3c5be9b183ef8";
var dailyForecastEl = document.querySelector("#one");
var ultraVEl = document.querySelector("#ultraV");
var formSearchEl = document.querySelector("#formSearch");
var citySearchEl = $("#citySearch");
var previousSearchItemsBtnEl = document.querySelectorAll(".previousSearchItemsBtn");
var searchBtnEl = document.querySelector("#searchBtn");
var historyItemsEl = $("#historyItems");
var previousSearchesBox = $("#previousSearches");
var iconOneEl = document.querySelector("#iconOne");

//For city names in local storage
var storageCity = [];

var userCitySearch;

// Elements to make full URLs
var iconFront = "http://openweathermap.org/img/wn/";
var iconBack = "@2x.png";
var apiFront = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiBack = "&appid=" + yourApiKey + "&units=imperial";
var apiForecastFront = "https://api.openweathermap.org/data/2.5/forecast?q=";
var oneCallApi;
var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=";

//This function is the current day forecast.
function searching(event, userCitySearch) {
  console.log(event);
                                                                            
  var weatherAPI = apiFront + userCitySearch + apiBack;
  var userInputTrimmed = $('<button class="previousSearchItemsBtn" type="button">');
  userInputTrimmed.click(function (event) {
    event.preventDefault();
    var value = $(this).text();
    console.log(value);
    searching(event, value);
    forecasting(event, value);
  });
  //Element in localstorage check
  if(storageCity.indexOf(userCitySearch) === -1) {
      storageCity.push(userCitySearch);
      localStorage.setItem("storageCity", JSON.stringify(storageCity));
      userInputTrimmed.text(userCitySearch);
      previousSearchesBox.append(userInputTrimmed);
  } 
  //Fetch for daily weather conditions
  fetch(weatherAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var uviLat = `${data.coord.lat}`;
      var uviLon = `${data.coord.lon}`;
      console.log(uviLat);
      console.log(uviLon);
      var daIcon = `${data.weather[0].icon}`;
      console.log("You are in the searching function" + data);
      //Template literals for the actual data in the daily forecast area
      dailyForecastEl.innerHTML = 
        `
        <ul>
        <li> ${data.name} </li>
        <li> <span class="mainDate"> ${moment(data.dt, "X").format("MM/DD/YYYY")} </span></li>
        <li> <img src= ${iconFront + daIcon + iconBack}> </li>
        <li> Temp:  ${data.main.temp} &#8457 </li>
        <li> Humidity:  ${data.main.humidity}% </li>
        <li> Wind Speed:  ${data.wind.speed} MPH </li>
        </ul>
        `;
      ultraVioletIndex(uviLat, uviLon);
    });
}

//This function starts the 5 day forecast.
function forecasting(event, userCitySearch) {
  event.preventDefault();
  var forecastWeatherApi = apiForecastFront + userCitySearch + apiBack;
  console.log("You are in the function");
  fetch(forecastWeatherApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //This block of code will gather the icon code numbers from data
      //and get the weather icons from the website.
      var daIcon2 = `${data.list[2].weather[0].icon}`; 
      var daIcon3 = `${data.list[10].weather[0].icon}`; 
      var daIcon4 = `${data.list[18].weather[0].icon}`;
      var daIcon5 = `${data.list[26].weather[0].icon}`;
      var daIcon6 = `${data.list[34].weather[0].icon}`;

      //Data pull for day one of five day. 12noon
      document.querySelector("#two").innerHTML =        
        `                                                                           
        <ul>
        <li></li>
        <li>${moment(data.list[2].dt, "X").format("MM/DD/YYYY")}</li>
        <li> <img src= ${iconFront + daIcon2 + iconBack}> </li>
        <li> Temp:  ${data.list[2].main.temp} &#8457 </li>
        <li> Humidity:  ${data.list[2].main.humidity}% </li>
        </ul>
        `;
      document.querySelector("#three").innerHTML =
        `
        <ul>
        <li></li>
        <li> ${moment(data.list[10].dt, "X").format("MM/DD/YYYY")} </li>
        <li> <img src= ${iconFront + daIcon3 + iconBack}> </li>
        <li> Temp:  ${data.list[10].main.temp} &#8457 </li>
        <li> Humidity:  ${data.list[10].main.humidity}% </li>
        </ul>
        `;
      document.querySelector("#four").innerHTML =
        `
        <ul>
        <li></li>
        <li> ${moment(data.list[18].dt, "X").format("MM/DD/YYYY")} </li>
        <li> <img src= ${iconFront + daIcon4 + iconBack}> </li>
        <li> Temp:  ${data.list[18].main.temp} &#8457 </li>
        <li> Humidity:  ${data.list[18].main.humidity}% </li>
        </ul>
        `;
      document.querySelector("#five").innerHTML =
        `
        <ul>
        <li></li>
        <li> ${moment(data.list[26].dt, "X").format("MM/DD/YYYY")} </li>        
        <li> <img src= ${iconFront + daIcon5 + iconBack}> </li>
        <li> Temp:  ${data.list[26].main.temp} &#8457 </li>
        <li> Humidity:  ${data.list[26].main.humidity}% </li>
        </ul>
        `;
      document.querySelector("#six").innerHTML =
        `
        <ul>
        <li></li>
        <li> ${moment(data.list[34].dt, "X").format("MM/DD/YYYY")} </li>
        <li> <img src= ${iconFront + daIcon6 + iconBack}> </li>
        <li> Temp:  ${data.list[34].main.temp} &#8457 </li>
        <li> Humidity:  ${data.list[34].main.humidity}% </li>
        </ul>
        `;
      //Clears data from input field
      citySearchEl.val("");
    });
}

//Separate function to get the UV data for the current day
function ultraVioletIndex(uviLat, uviLon) {
  console.log(uviLat); //This function starts the 5 day forecast.

  oneCallApi =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    uviLat +
    "&lon=" +
    uviLon +
    "&exclude=alerts&appid=" +
    yourApiKey;

  fetch(oneCallApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("You are in the UVI");
      console.log(data);
      console.log(data.current.uvi);
      ultraVEl.innerHTML= `
        <ul>
        <li></li>
        <li>UV Index:  <span class="uviData">${data.current.uvi}</span></li>
        <ul>
        `;
      if (data.current.uvi >= 6) {
        document.querySelector(".uviData").style.background = "red";
      } else if (data.current.uvi <= 2) {
        document.querySelector(".uviData").style.background = "green";
      } else {
        document.querySelector(".uviData").style.background = "yellow";
      }
    });
}

//Function to pull city names from storage
function pullStorageCity() {
  if (localStorage.getItem("storageCity")) {
    storageCity = JSON.parse(localStorage.getItem("storageCity"));
    for (let k = 0; k < storageCity.length; k++) {
      var userInputTrimmed = $('<button class="previousSearchItemsBtn" type="button">');
      userInputTrimmed.click(function (event) {
        event.preventDefault();
        var value = $(this).text();
        console.log(value);
        searching(event, value);
        forecasting(event, value);
      });
      userInputTrimmed.text(storageCity[k]);
      userInputTrimmed.on("click", searching); 
      previousSearchesBox.append(userInputTrimmed);
    }
  }
}

pullStorageCity();

//Listening for submit to start application with user
formSearchEl.addEventListener("submit", function (event) {
  event.preventDefault();
  searching(event, citySearchEl.val());
  forecasting(event, citySearchEl.val());
});