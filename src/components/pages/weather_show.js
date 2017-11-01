import React from 'react';
import Header from './../layouts/header';
import Navbar from './../layouts/navbar';
import SearchBar from './../layouts/search_bar';


class WeatherShow extends React.Component{
    render (){
        return (
            <div>
                <Header title="Weather Forecast"/>
                <Navbar />
                <SearchBar placeholder="Search Your City..." />
            </div>
        );
    }
}

export default WeatherShow;