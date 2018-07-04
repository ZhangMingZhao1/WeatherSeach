"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var chart_1 = require("../components/chart");
var google_map_1 = require("../components/google_map");
var WeatherList = /** @class */ (function (_super) {
    __extends(WeatherList, _super);
    function WeatherList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //返回的数据
    WeatherList.prototype.renderWeather = function (cityData) {
        var name = cityData.city.name;
        // console.log('cityData',cityData);
        var temps = cityData.list.map(function (weather) { return weather.main.temp - 273.15; });
        var pressures = cityData.list.map(function (weather) { return weather.main.pressure; });
        var humidities = cityData.list.map(function (weather) { return weather.main.humidity; });
        var _a = cityData.city.coord, lat = _a.lat, lon = _a.lon;
        return (React.createElement("tr", { key: name },
            React.createElement("td", null,
                React.createElement(google_map_1.default, { lat: lat, lon: lon })),
            React.createElement("td", null,
                React.createElement(chart_1.default, { data: temps, color: "orange", units: "\u00B0C" })),
            React.createElement("td", null,
                React.createElement(chart_1.default, { data: pressures, color: "green", units: "hPa" })),
            React.createElement("td", null,
                React.createElement(chart_1.default, { data: humidities, color: "black", units: "%" }))));
    };
    WeatherList.prototype.render = function () {
        return (React.createElement("table", { className: "table table-hover" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("td", null, "\u57CE\u5E02"),
                    React.createElement("td", null, "\u6E29\u5EA6\uFF08\u00B0C\uFF09"),
                    React.createElement("td", null, "\u6C14\u538B\uFF08hPa\uFF09"),
                    React.createElement("td", null, "\u6E7F\u5EA6\uFF08%\uFF09"))),
            React.createElement("tbody", null, this.props.weather.map(this.renderWeather))));
    };
    return WeatherList;
}(React.Component));
function mapStateToProps(state) {
    return ({ weather: state.weather });
}
exports.default = react_redux_1.connect(mapStateToProps)(WeatherList);
//# sourceMappingURL=weather_list.js.map