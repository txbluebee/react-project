import React from 'react';
import { connect } from 'react-redux';

import Header from './../layouts/header';
import Navbar from './../layouts/navbar';
import SearchBar from './../layouts/search_bar';

import { fetchWeather } from './../../actions/weather';



class WeatherShow extends React.Component{
    render (){
        console.log(this.props.weather);
        return (
            <div>
                <Header title="Weather Forecast"/>
                <Navbar />
                <SearchBar placeholder="Search Your City..." fetchData={this.props.fetchWeather} />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">City</th>
                            <th scope="col">Temperature</th>
                            <th scope="col">Pressure</th>
                            <th scope="col">Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
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