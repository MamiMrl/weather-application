const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Maribor&units=metric&appid=c4e4dedb1cf5c1e6452fea66c9135221`).then(response => {
    response.json().then(data => {

        maribor_name.textContent = `${data.name}`;
        mar_desc.textContent = `(${data.weather[0].description})`;
        maribor_forecast.textContent = `Temperature: ${data.main.temp}°C  Wind Speed: ${data.wind.speed} km/h Cloudiness: ${data.clouds.all}%`;
        
    });
  });
fetch(`http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&appid=c4e4dedb1cf5c1e6452fea66c9135221`).then(response => {
    response.json().then(data => {

        helsinki_name.textContent = `${data.name}`;
        hls_desc.textContent = `(${data.weather[0].description})`;
        helsinki_forecast.textContent = `Temperature: ${data.main.temp}°C  Wind Speed: ${data.wind.speed} km/h Cloudiness: ${data.clouds.all}%`;
    });
  });
fetch(`http://api.openweathermap.org/data/2.5/weather?q=Istanbul&units=metric&appid=c4e4dedb1cf5c1e6452fea66c9135221`).then(response => {
    response.json().then(data => {

        istanbul_name.textContent = `${data.name}`;
        ist_desc.textContent = `(${data.weather[0].description})`;
        istanbul_forecast.textContent = `Temperature: ${data.main.temp}°C Wind Speed: ${data.wind.speed} km/h Cloudiness: ${data.clouds.all}%`;

    });
  });
fetch(`http://api.openweathermap.org/data/2.5/weather?q=Dubai&units=metric&appid=c4e4dedb1cf5c1e6452fea66c9135221`).then(response => {
    response.json().then(data => {

        dubai_name.textContent = `${data.name}`;
        dbi_desc.textContent = `(${data.weather[0].description})`;
        dubai_forecast.textContent = `Temperature: ${data.main.temp}°C Wind Speed: ${data.wind.speed} km/h Cloudiness: ${data.clouds.all}%`;

    });
  });