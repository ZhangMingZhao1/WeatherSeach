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
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var index_1 = require("../actions/index");
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { term: '' };
        _this.onInputChange = _this.onInputChange.bind(_this);
        _this.onFormSubmit = _this.onFormSubmit.bind(_this);
        return _this;
    }
    SearchBar.prototype.onInputChange = function (event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    };
    SearchBar.prototype.onFormSubmit = function (event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    };
    SearchBar.prototype.render = function () {
        var _this = this;
        return (React.createElement("form", { className: "input-group", onSubmit: this.onFormSubmit },
            React.createElement("input", { type: "text", className: "form-control", placeholder: "\u8F93\u5165\u57CE\u5E02\u7684\u82F1\u6587\u540D\uFF0C\u4E2D\u56FD\u57CE\u5E02\u4E3A\u62FC\u97F3\uFF0C\u5982ChangSha\uFF0C\u67E5\u8BE2\u8FD15\u65E5\u7684\u5929\u6C14\u72B6\u51B5", value: this.state.term, onChange: function (event) { return _this.onInputChange(event); } }),
            React.createElement("span", { className: "input-group-btn" },
                React.createElement("button", { className: "btn btn-secondary" }, "\u67E5\u8BE2"))));
    };
    return SearchBar;
}(React.Component));
function mapDispatchToPros(dispatch) {
    return (redux_1.bindActionCreators({ fetchWeather: index_1.fetchWeather }, dispatch));
}
exports.default = react_redux_1.connect(null, mapDispatchToPros)(SearchBar);
//# sourceMappingURL=search_bar.js.map