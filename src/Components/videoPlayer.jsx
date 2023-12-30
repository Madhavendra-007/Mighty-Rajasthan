import React, { useState, useEffect } from 'react';
import '../Styling/videoPlayer.css'; // Import your styles
import videoBg from '../videos/RajasthanVideoDesktop.webm';
import videoBgSmall from '../videos/RajasthanVideoTablet.webm';

// Import external SVGs
import { ReactComponent as MuteIcon } from '../Images/Unmute.svg';
import { ReactComponent as UnmuteIcon } from '../Images/Mute.svg';

const VideoPlayer = () => {
  const [muted, setMuted] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMute = () => {
    setMuted(!muted);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };

    // Set initial screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const video = document.getElementById('myVideo');
    const headingContainer = document.getElementById('headingContainer');

    const addHeading = (startTime, endTime, mainText, subText) => {
        const heading = document.createElement('div');
        heading.innerHTML = `<h2>${mainText}</h2><p>${subText}</p>`;
        heading.style.position = 'absolute';
        heading.style.top = '50%';
        heading.style.left = '50%';
        heading.style.transform = 'translate(-50%, -50%)';
        heading.style.zIndex = '1000';
        heading.style.color = 'white'; // Customize as needed
        heading.style.textAlign = 'center';
        heading.style.display = 'none';
        heading.style.transition = 'all 0.5s ease-in-out';

        headingContainer.appendChild(heading);

        video.addEventListener('timeupdate', function () {
            if (video.currentTime > startTime && video.currentTime < endTime ) {
                heading.style.display='flex';
                heading.style.flexDirection='column';
                heading.style.textShadow = '2px 2px 4px #000000';
                heading.style.width='100%';
                // heading.style.opacity='0.7';
                heading.style.textTransform='uppercase';
                heading.firstChild.style.fontSize='8rem';
                heading.firstChild.style.marginBottom='0.5rem';
                heading.lastChild.style.fontSize='2.5rem';
                


            } else if (video.currentTime > endTime) {
                heading.style.display='none';
            }
        });
    };

    // Example usage: Heading stays visible from 5 to 10 seconds
    addHeading(10, 15.5, 'CAPTIVATING JAIPUR', 'WHERE EVERY STREET TELLS A ROYAL TALE');
    addHeading(22, 28.25, 'Colors, Culture, and Cuisine', 'Your Unforgettable Jaipur Getaway Awaits!');
    addHeading(38.5, 44, "nature's gallery", 'wildlife and heritage share a silent dialogue through time.');
    addHeading(52, 59, "In aisles of culture", 'shopping for humility,  discover treasures of heritage');

  


    
    // Cleanup event listeners when the component unmounts
    return () => {
        video.removeEventListener('timeupdate', null);
    };
}, []);

  return (
    <div style={{ position: 'relative' }}>
      <video
        id="myVideo"
        src={isSmallScreen ? videoBgSmall : videoBg}
        type="video/webm"
        autoPlay
        loop
        muted={muted}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <div id="headingContainer"></div>
      <button
        onClick={toggleMute}
        style={{
          position: 'absolute',
          bottom: '75px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          height: '50px',
          width: '50px',
        }}
      >
        {muted ? <UnmuteIcon /> : <MuteIcon />}
      </button>
      <div className="momentousBW"></div>
    </div>
  );
};

export default VideoPlayer;
