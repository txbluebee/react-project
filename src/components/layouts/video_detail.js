import React from 'react';

export default function({video}){
    if (!video){
        return (
            <div>Loading...</div>
        );
    }
    const videoId = video.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`;

    return (
        <div className="col-lg-8">
            <div className="embed-responsive embed-responsive-16by9 mb-2">
                <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
            </div>
            <div>
                <h3>Title: {video.snippet.title} </h3>
                <hr />
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}