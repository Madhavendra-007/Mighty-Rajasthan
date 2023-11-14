import './App.css';
import './Styling/Navbar.css';
import './Styling/Footer.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Day1 from './Routes/day1';
import Day2 from './Routes/day2';
import Day3 from './Routes/day3';

import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'; 

import React, { useState, useEffect } from 'react';
import Preloader from './Components/preloader'; 


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Promise that resolves when all page resources have loaded
    const resourcesLoaded = new Promise((resolve) => {
      window.onload = () => resolve();
    });

    // Promise that resolves after a minimum of 5 seconds
    const minimumLoadingTime = new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });

    // Wait for all resources and the minimum loading time to complete
    Promise.all([resourcesLoaded, minimumLoadingTime]).then(() => {
      setLoading(false); // This will hide the preloader
    });

    // Cleanup function to reset the onload event listener
    return () => {
      window.onload = null;
    };
  }, []);
  return (
    <>
    {loading ? (
        <Preloader />
      ) : (
      <Router>
        <ScrollToTop /> {/* This component will handle scrolling to the top */}
        <Navbar /> {/* Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/day1" element={<Day1 />} />
          <Route path="/day2" element={<Day2 />} />
          <Route path="/day3" element={<Day3 />} />
          <Route path="/day3" element={<Day3 />} />


        </Routes>
        <Footer />  {/* Footer */}
      </Router>
     )}
      
    </>
  );
}

export default App;
