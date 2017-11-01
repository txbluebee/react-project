import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Header from './../layouts/header';
import Navbar from './../layouts/navbar';
import SearchBar from './../layouts/search_bar';
import Chart from './../layouts/chart';

import { fetchWeather } from './../../actions/weather';



class WeatherShow extends React.Component{

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), temp=> 1.8*(temp-273) + 32);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const lat = cityData.city.coord.lat;
        const lon = cityData.city.coord.lon;
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="red" unit="F"/></td>
                <td><Chart data={pressures} color="blue" unit="kPA"/></td>
                <td><Chart data={humidities} color="green" unit="%" /></td>
            </tr>
        );
    }

    render (){
        return (
            <div>
                <Header title="Weather Forecast"/>
                <Navbar />
                <SearchBar placeholder="Search Your City..." fetchData={this.props.fetchWeather} />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">City</th>
                            <th scope="col">Temperature (F)</th>
                            <th scope="col">Pressure (kPa)</th>
                            <th scope="col">Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToPorps(state){
    return {
        weather: state.weather
    }
}

export default connect(mapStateToPorps, { fetchWeather } )(WeatherShow);