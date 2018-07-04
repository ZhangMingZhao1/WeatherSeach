"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var weather_reducer_1 = require("./weather_reducer");
var rootReducer = redux_1.combineReducers({
    weather: weather_reducer_1.default
});
exports.default = rootReducer;
//# sourceMappingURL=index.js.map