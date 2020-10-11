import React, { Component } from 'react';

const VideoItem = (props) => {
    return (
        <h2>
            {props.video.snippet.title}
        </h2>
    );
}


export default VideoItem;