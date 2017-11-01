import React from 'react';

import Header from './../layouts/header';
import Navbar from './../layouts/navbar';
import SearchBar from './../layouts/search_bar';
import VideoList from './../layouts/video_list';
import VideoDetail from './../layouts/video_detail';

import YouTubeSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBR3z8KY75KLLNUDhXBiQFTIB4i9NejoIY';


class YoutubeClone extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('seattle');
    }
        
    videoSearch(term){
        YouTubeSearch({key: API_KEY, term: term}, (videos) =>{
          this.setState({
            videos: videos,
            selectedVideo: videos[0]
          });
        })
      }

   
    render(){
        return(
            <div>
                <Header title="Youtube Clone" />
                <Navbar />
                <SearchBar placeholder="Search Youtube Video..." fetchData={this.videoSearch.bind(this)}/>
                <div className="row mt-5">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList videos={this.state.videos} />
                </div>
            </div>
        );
    }
}



export default YoutubeClone;