// src/components/VideoTile.js

import React from 'react';

const VideoTile = ({ src, width, height }) => {
    return (
        <center>
            <video width={width} height={height} controls style={{ marginTop: '20px' }}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </center>
  );
};

export default VideoTile;
