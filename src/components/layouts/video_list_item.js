import React from 'react';

export default function({video, onVideoSelect}){
    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        <li
            onClick={()=>onVideoSelect(video)}
            className="list-group-item list-group-item-action" 
            key={video.etag} >
            <div className="media">
                <img className="align-self-start mr-3" src={imgUrl} alt="Generic placeholder image" />
                <div className="media-body">
                    <h6 className="mt-0">{video.snippet.title}</h6>
                </div>
            </div>
        </li>
    );
}   