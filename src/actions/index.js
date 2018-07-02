"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios = require("axios");
var API_KEY = "b66801900e80a9222ec001b2c96e3263";
var ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;
exports.FETCH_WEATHER = 'FETCH_WEATHER';
function fetchWeather(city) {
    var url = ROOT_URL + "&q=" + city + ",cn";
    console.log(url);
    var request = axios.get(url);
    console.log('Request : ', request);
    return ({
        type: exports.FETCH_WEATHER,
        payload: request
    });
}
exports.fetchWeather = fetchWeather;
//# sourceMappingURL=index.js.map