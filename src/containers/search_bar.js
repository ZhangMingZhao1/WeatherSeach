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
var actions_1 = require("../actions");
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { term: "" };
        _this.onInputChange = _this.onInputChange.bind(_this);
        _this.onFormSubmit = _this.onFormSubmit.bind(_this);
        return _this;
    }
    SearchBar.prototype.onInputChange = function (event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    };
    SearchBar.prototype.onFormSubmit = function (event) {
        event.preventDefault(); //这句代码让输入框点提交之后不会清空文本
        this.props.fetchWeather(this.state.term);
        this.setState({ term: "" });
    };
    SearchBar.prototype.render = function () {
        return (React.createElement("form", { className: "input-group", onSubmit: this.onFormSubmit },
            React.createElement("input", { className: "form-control", placeholder: "\u8BF7\u8F93\u5165\u57CE\u5E02\u540D\u79F0,\u4EE5\u4FBF\u67E5\u8BE2\u672A\u67655\u65E5\u5929\u6C14\u60C5\u51B5\uFF0C\u4F8B\u5982BeiJing", onChange: this.onInputChange, value: this.state.term }),
            React.createElement("span", { className: "input-group-btn" },
                React.createElement("button", { className: "btn btn-secondary", type: "submit" }, "\u67E5\u8BE2"))));
    };
    return SearchBar;
}(React.Component));
function mapDispatchToProps(dispatch) {
    return (redux_1.bindActionCreators({ fetchWeather: actions_1.fetchWeather }, dispatch));
}
exports.default = react_redux_1.connect(null, mapDispatchToProps)(SearchBar);
//# sourceMappingURL=search_bar.js.map