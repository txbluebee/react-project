import React from 'react';

export default class Header extends React.Component {
    render(){
        return(
            <div className="jumbotron d-flex justify-content-center mb-0">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}