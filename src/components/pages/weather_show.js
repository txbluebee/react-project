import React from 'react';
import Header from './../layouts/header';
import Navbar from './../layouts/navbar';


class WeatherShow extends React.Component{
    render (){
        return (
            <div>
                <Header title="Weather Forecast"/>
                <Navbar />
            </div>
        );
    }
}

export default WeatherShow;