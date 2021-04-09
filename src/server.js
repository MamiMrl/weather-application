const express = require('express');
const request = require('request');
const path = require('path');
const hbs = require('hbs');
// const geocode = require('/geocode');
// const weather = require('/weather');



const publicpathURL = path.join(__dirname, '../public' );
const partialsPathUrl = path.join(__dirname, '../public');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../public'));

hbs.registerPartials(partialsPathUrl);

app.use(express.static(publicpathURL));

let apiKey = "c4e4dedb1cf5c1e6452fea66c9135221";
let sCity = "Guadalajara";
let URL = `http://api.openweathermap.org/data/2.5/weather?q=${sCity}&units=metric&appid=${apiKey}`;

request({url: URL, json:true }, (error, res, body) => {
    console.log(res.body);
    const temperature = body.main.temp;
    const pressure = body.main.pressure;
    const windSpeed = body.wind.speed;
    const city = res.body.name;
    const Weather = body.weather[0];
    const CloudPer = body.clouds.all;

    console.log(`Today's weather in ${city} ${temperature} C° and wind speed is ${windSpeed}.`);
    console.log(`Cloudiness: ${CloudPer}%`);
})


app.get('', (req, res) => {
    res.render('index', {
      title: 'Welcome to  Weather Forecast!',
    });
});
  
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
      });
});

app.get('/maribor', (req, res) => {
    res.render('maribor', {
        title: 'Maribor, Slovenia',
      });
});

app.get('/istanbul', (req, res) => {
    res.render('istanbul', {
        title: 'Istanbul, Turkey',
        temperature:"",
        WeatherDesc:"",
      });
});

app.get('/helsinki', (req, res) => {
    res.render('helsinki', {
        title: 'Helsinki, Finland',
        temperature:"",
        WeatherDesc:"",
      });
});

app.get('/dubai', (req, res) => {
    res.render('dubai', {
        title: 'Dubai, United Arab Emirates',
        temperature:"",
        WeatherDesc:"",

      });
});

app.get('*', (req, res) => {
    res.render('404', {
      title: '404 Not Found'
    });
  });





app.listen(3010, () => {
    console.log('3010 number port server is still live.');
});