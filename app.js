const request = require('request');

// Our API URL here we send that url to URL constant.
var URL = "http://api.openweathermap.org/data/2.5/weather?q=Maribor&units=metric&appid=e9fa0e8960ef8ee8784fde7ad4ba6984";

//Start to request function with JSON
request({url: URL, json:true }, (error, response, body) => {
    // console.log(response.body);
    const temperature = body.main.temp;
    const windSpeed = body.wind.speed;
    const city = response.body.name;
    const Weather = body.weather[0];


    console.log(`City: ${city}`);
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Wind Speed: ${windSpeed} km/h`);
    console.log(`Description: ${Weather.description}\n`);
    




});

// Our API URL here we send that url to URL constant.
var URL = "http://api.openweathermap.org/data/2.5/weather?q=Istanbul&units=metric&appid=e9fa0e8960ef8ee8784fde7ad4ba6984";

//Start to request function with JSON
request({url: URL, json:true }, (error, response, body) => {
    // console.log(response.body);
    var temperature = body.main.temp;
    var windSpeed = body.wind.speed;
    var city = response.body.name;
    var Weather = body.weather[0];


    console.log(`City: ${city}`);
    console.log(`Temperature: ${temperature} °C`);
    console.log(`Wind Speed: ${windSpeed} km/h`);
    console.log(`Description: ${Weather.description}\n`);
    




});

