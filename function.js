const inputBox = document.querySelector(".input-box")
const searchBtn = document.getElementById("searchBtn")
const weatherImg = document.querySelector(".weather-img")
const temprature = document.querySelector(".temprature")
const description = document.querySelector(".description")
const humidity = document.querySelector("#humidity")
const windSpeed = document.querySelector("#wind-speed")

async function checkWeather(city){
    const api_key = "62f66a4ffd5a79eeeef1c4e6d3c9aa97";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    try{
    const weather_data =await fetch(`${url}`)
    .then(respose =>respose.json())
    .then((data)=>{
        description.innerHTML = (data.weather[0].main);
         windSpeed.innerHTML = (data.wind.speed+`Km/H`);
         humidity.innerHTML = (data.main.humidity+`%`)
         temprature.innerHTML =  `${Math.round(data.main.temp - 273.15)}<sup>°C</sup>`
        console.log(data );
        switch(data.weather[0].main){
            case 'Clouds':
                console.log("ok");
                weatherImg.src = "/images/cloud.png"
                break;
            case 'Clear':
                console.log("ok");
                weatherImg.src = "/images/sun.jpg"
                break;
            case 'Rain':
                console.log("ok");
                weatherImg.src = "/images/rainy.jpg"
                break;
            case 'Mist':
                console.log("ok");
                weatherImg.src = "/images/mist.jpg"
                break;
            case 'Snow':
                console.log("ok");
                weatherImg.src = "/images/snow.jpg"
                break;
        }
        
       
    }) 
}catch(error){
    console.log(error.message);
    weatherImg.src = "/images/error.png"
}    
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
    console.log("hello");
})