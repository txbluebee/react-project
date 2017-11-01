import React from 'react';
import { connect } from 'react-redux';
import Header from './../layouts/header';
import Navbar from './../layouts/navbar';
import { fetchPost } from './../../actions/app';

class PostsShow extends React.Component {
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }
    render() {
        return (
            <div>
                <Header title="Blog Post"/>
                <Navbar />
                <div>Hello Lily</div>
            </div>
        );
    }
}

export default connect(null, { fetchPost })(PostsShow);