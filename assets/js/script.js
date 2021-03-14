
fetch("https://api.openweathermap.org/data/2.5/weather?q=El Paso&appid=639e73227e908c5498c3c5be9b183ef8&units=imperial")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    document.querySelector("p").innerHTML = 
    `
    <ul>
    <li> Name:  ${data.name} </li>
    <li> Temp:  ${data.main.temp} </li>
    <li> Humidity:  ${data.main.humidity}% </li>
    <li> Wind Speed:  ${data.wind.speed} MPH </li>
    <li> UV Index:  ${data.main.temp} </li>


    </ul>
    `
})

