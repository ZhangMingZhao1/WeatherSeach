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
var WeatherList = /** @class */ (function (_super) {
    __extends(WeatherList, _super);
    function WeatherList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //返回的数据
    WeatherList.prototype.renderWeather = function (cityData) {
        var name = cityData.city.name;
        console.log('cityData', cityData);
        return (React.createElement("tr", { key: name },
            React.createElement("td", null, name)));
    };
    WeatherList.prototype.render = function () {
        return (React.createElement("table", { className: "table table-hover" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("td", null, "\u57CE\u5E02"),
                    React.createElement("td", null, "\u6E29\u5EA6"),
                    React.createElement("td", null, "\u6C14\u538B"),
                    React.createElement("td", null, "\u6E7F\u5EA6"))),
            React.createElement("tbody", null, this.props.weather.map(this.renderWeather))));
    };
    return WeatherList;
}(React.Component));
function mapStateToProps(state) {
    return ({ weather: state.weather });
}
exports.default = react_redux_1.connect(mapStateToProps)(WeatherList);
//# sourceMappingURL=weather_list.js.map