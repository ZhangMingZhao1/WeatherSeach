"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_google_maps_1 = require("react-google-maps");
exports.default = (function (props) {
    return (React.createElement(react_google_maps_1.GoogleMapLoader, { containerElement: React.createElement("div", { style: { height: "100%" } }), googleMapElement: React.createElement(react_google_maps_1.GoogleMap, { defaultZoom: 10, defaultCenter: { lat: props.lat, lng: props.lon } }) }));
});
//# sourceMappingURL=google_map.js.map