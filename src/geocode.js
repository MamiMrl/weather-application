
const request = require('request');

const geocode = (address, callback) => {
  const geocodeUrl = 'https://api.opencagedata.com/geocode/v1/json?q=' + address + '&key=12c81633afa94099aeb7089ad3cbce1c&language=en&pretty=1'
  request({
    url: geocodeUrl,
    json: true
  }, (e, response) => {
    if (e) {
      callback(e, null);
    } else if (response.body.results.length === 0) {
      callback('Adres icin koordinat bilgisi bulunamadi.', null);
    } else {
      const { geometry } = response.body.results[0]
      const data = {
        lat: geometry.lat,
        lng: geometry.lng
      }
      callback(null, data);
    }
  })
};

module.exports = geocode;