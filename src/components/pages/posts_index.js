import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../layouts/header';
import Navbar from './../layouts/navbar';
import { fetchPosts } from './../../actions/app';

class PostsIndex extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        return (
            <div>
                <Header title="Blog Posts" />
                <Navbar />
                <div className="blog-header mt-3">
                    <div className="container">
                     <h1 className="blog-title">The Blog</h1>
                     <p className="lead blog-description">Let's creat a blog</p>
                    </div>
                </div>
                <ul className="list-group">
                </ul>
            </div>    
        );
    }
}

export default connect(null, { fetchPosts })(PostsIndex);