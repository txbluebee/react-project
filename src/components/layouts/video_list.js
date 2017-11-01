import React from 'react';

class VideoList extends React.Component{

    renderList(video){
        const imgUrl = video.snippet.thumbnails.default.url;
        return (
            <li className="list-group-item" key={video.etag}>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imgUrl} alt="media" />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            {video.snippet.title}
                        </div>
                    </div>
                </div>
            </li> 
        );
    }

    render(){
        return (
            <div className="col-lg-4">
                <ul className="list-group">
                    {this.props.videos.map(this.renderList)};
                </ul>
            </div>
        );
    }
}


export default VideoList;