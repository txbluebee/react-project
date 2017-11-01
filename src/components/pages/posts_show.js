import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './../layouts/header';
import Navbar from './../layouts/navbar';
import { fetchPost, deletePost } from './../../actions/app';

class PostsShow extends React.Component {
    componentDidMount(){
        if (!this.props.post){
            const { id } = this.props.match.params;
            this.props.fetchPost(id);
        }
    }

    onClickDeleteBtn(){
        const { id } = this.props.match.params;
        this.props.deletePost(id, ()=>{
            this.props.history.push('/posts');
        });
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
                <div>
                    <div className="d-flex justify-content-between my-3">
                        <Link className="btn btn-outline-success" to="/posts">Back</Link>
                        <button className="btn btn-outline-danger" onClick={this.onClickDeleteBtn.bind(this)}>Delete Post</button>
                    </div>
                    <h2>{post.title}</h2>
                    <h6>{post.categories}</h6>
                    <hr />
                    <p> {post.content}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps){
    return {
        post: posts[ownProps.match.params.id]
    }    
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);