import React from 'react';

class VideoList extends React.Component{

    onSelectVideo(event){
        console.log(event);
    }

    renderList(video){
        const imgUrl = video.snippet.thumbnails.default.url;
        return (
            <li 
                className="list-group-item list-group-item-action" 
                key={video.etag} >
                <div className="media">
                    <img className="align-self-start mr-3" src={imgUrl} alt="Generic placeholder image" />
                    <div className="media-body">
                        <h6 className="mt-0">{video.snippet.title}}</h6>
                    </div>
                </div>
            </li>
        );
    }

    render(){
        return (
            <div className="col-lg-4">
                <ul className="list-group videoLists">
                    {this.props.videos.map(this.renderList)};
                </ul>
            </div>
        );
    }
}


export default VideoList;