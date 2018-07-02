/**
 * Created by www.wuleba.com on 2016/9/26.
 */

import * as React from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export class App extends React.Component<void,void> {
    render() {
        return (
            <div>
                <SearchBar/>
                <WeatherList/>
            </div>
        );
    }
}