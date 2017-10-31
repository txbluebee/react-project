import React, { Component } from 'react';
import Header from './../layouts/header';
import Navbar from './../layouts/navbar';

class HomePage extends Component {
    render() {
        return(
            <div>
                <Header />
                <Navbar />
            </div>
        );
    }
}

export default HomePage;