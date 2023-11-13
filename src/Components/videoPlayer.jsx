import React from 'react';
import '../Styling/videoPlayer.css';
import videoBg from '../videos/RajasthanVideoDesktop.webm';

const VideoPlayer = () => {
    return (
        <>
            <video src={videoBg} type="video/webm" autoPlay loop muted />
        </>
    );
};

export default VideoPlayer;
