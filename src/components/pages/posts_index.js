import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Header from './../layouts/header';
import Navbar from './../layouts/navbar';
import { fetchPosts } from './../../actions/app';

class PostsIndex extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderList(){
        return _.map(this.props.posts, post =>{
            return (
                <Link className="list-group-item list-group-item-action" 
                      to={`/posts/${post.id}`} 
                      key={post.id} >
                    {post.title}
                </Link>    
            );
        });
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
                <div className="list-group">
                    {this.renderList()}
                </div>
            </div>    
        );
    }
}


function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);