import React from 'react';
import { connect } from 'react-redux';
import Header from './../layouts/header';
import Navbar from './../layouts/navbar';
import { fetchPost } from './../../actions/app';

class PostsShow extends React.Component {
    componentDidMount(){
        if (!this.props.post){
            const { id } = this.props.match.params;
            this.props.fetchPost(id);
        }
    }
    render() {
        const { post } = this.props;
        if (!post){
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div>
                <Header title="Blog Post"/>
                <Navbar />
                <div>{post.title}</div>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps){
    return {
        post: posts[ownProps.match.params.id]
    }    
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);