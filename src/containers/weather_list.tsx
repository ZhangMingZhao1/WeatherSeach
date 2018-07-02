import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

interface IWeatherListProps {
    weather:any
}
interface IWeatherListState {

}

class WeatherList extends React.Component<IWeatherListProps,IWeatherListState>{
    //返回的数据
    renderWeather(cityData) {
        const name = cityData.city.name;
        console.log('cityData',cityData);
        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        )
    }
    render() {
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <td>城市</td>
                    <td>温度</td>
                    <td>气压</td>
                    <td>湿度</td>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
function mapStateToProps(state) {
    return ({weather: state.weather});
}

export default connect<any,any,any>(mapStateToProps)(WeatherList);