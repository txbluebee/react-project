import React, { Component } from 'react';
import Header from './../layouts/header';
import Navbar from './../layouts/navbar';
import Card from './../layouts/card';
import blogpostImg from './../../assets/media/blogpost.png';
import weatherImg from './../../assets/media/weather.png';
import youtubeImg from './../../assets/media/youtube.png';

class HomePage extends Component {

    render() {
        const blogText = 'redux, redux-form, basic CRUD functionality';
        const weatherText = 'redux, OpenWeather api, react-sparklines';
        const youtubeText = 'react, bootstrap, youtube api, local state';
        return(
            <div>
                <Header title="React Projects"/>
                <Navbar />
                <div className="row mt-5 projects px-5">
                    <Card path="/posts" title="Blog Post" imgUrl={blogpostImg} text={blogText}/>
                    <Card path="/weather" title="Weather Forecase" imgUrl={weatherImg} text={weatherText}/>
                    <Card path="/youtube" title="Youtube Clone" imgUrl={youtubeImg} text={youtubeText}/>
                </div>
            </div>
        );
    }
}

export default HomePage;