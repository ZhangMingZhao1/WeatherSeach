/**
 * Created by www.wuleba.com on 2016/9/26.
 */

import {combineReducers} from 'redux';

import WeatherReducer from './weather_reducer';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;