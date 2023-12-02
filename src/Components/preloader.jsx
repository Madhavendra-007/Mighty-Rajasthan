// Preloader.js

import React, { useState, useEffect } from 'react';
import '../Styling/preloader.css';

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 5000); // Show preloader for at least 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return showPreloader ? (
    <div className="preloader">
      {/* Your existing preloader content */}
      <div className="baseStamp">
        <div className="compass"></div>
        <div className="text"></div>
      </div>
    </div>
  ) 
  : null;
};

export default Preloader;

