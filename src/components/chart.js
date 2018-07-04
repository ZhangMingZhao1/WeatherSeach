"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _ = require("lodash");
var react_sparklines_1 = require("react-sparklines");
function average(data) {
    console.log('data', data);
    console.log('average', _.round(_.sum(data) / data.length));
    return (_.round(_.sum(data) / data.length));
}
exports.default = (function (props) {
    return (React.createElement("div", null,
        React.createElement(react_sparklines_1.Sparklines, { height: 120, width: 180, data: props.data },
            React.createElement(react_sparklines_1.SparklinesLine, { color: props.color }),
            React.createElement(react_sparklines_1.SparklinesReferenceLine, { type: "avg" })),
        React.createElement("div", null,
            average(props.data),
            " ",
            props.units)));
});
//# sourceMappingURL=chart.js.map