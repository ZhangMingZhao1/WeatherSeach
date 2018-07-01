/**
 * Created by www.wuleba.com on 2016/9/26.
 */
import {log} from "util";
import * as axios from 'axios';

const API_KEY = "b66801900e80a9222ec001b2c96e3263";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=Beijing,cn`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = '${ROOT_URL}&q=${city},cn';
    const request = axios.get(url)
    ;
   console.log('Request : ',request);
   return ({
       type: FETCH_WEATHER,
       payload: request
   });
}


