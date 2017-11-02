import React from 'react';
import VideoListItem from './../layouts/video_list_item';

export default function({videos, onVideoSelect}){
    return (
        <div className="col-lg-4">
            <ul className="list-group videoLists">
                {videos.map( (video) => {
                    return <VideoListItem  video={video} key={video.etag} onVideoSelect={onVideoSelect}/>
                })};
            </ul>
        </div>
    );
}
