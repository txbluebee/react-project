import React from 'react';
import { connect } from 'react-redux';

import Header from './../layouts/header';
import Navbar from './../layouts/navbar';
import SearchBar from './../layouts/search_bar';
import VideoList from './../layouts/video_list';

import { fetchVideos } from './../../actions/youtube';

class YoutubeClone extends React.Component{
        
    componentDidMount(){
        this.props.fetchVideos("coldplay");
    }

    render(){
        console.log(this.props.videos);
        return(
            <div>
                <Header title="Youtube Clone" />
                <Navbar />
                <SearchBar placeholder="Search Youtube Video..." fetchData={this.props.fetchVideos}/>
                <div className="row">
                    <VideoList videos={this.props.videos}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps({videos}){
    return {videos};
}

export default connect(mapStateToProps, { fetchVideos })(YoutubeClone);