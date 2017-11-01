import React from 'react';
import Header from './../layouts/header';
import Navbar from './../layouts/navbar';

class PostsShow extends React.Component {
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

export default PostsShow;