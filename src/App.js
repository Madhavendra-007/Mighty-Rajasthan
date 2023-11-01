import './App.css';
import './Styling/Navbar.css';
import './Styling/Footer.css';
import React from 'react';
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


function App() {
  return (
    <>
      <Router>
        <ScrollToTop /> {/* This component will handle scrolling to the top */}
        <Navbar /> {/* Navbar */}
        <Routes>
          <Route path="/Mighty-Rajasthan" element={<Home />} />
          <Route path="/Mighty-Rajasthan/About" element={<About />} />
          <Route path="/Mighty-Rajasthan/Contact" element={<Contact />} />
          <Route path="/Mighty-Rajasthan/day1" element={<Day1 />} />
          <Route path="/Mighty-Rajasthan/day2" element={<Day2 />} />
          <Route path="/Mighty-Rajasthan/day3" element={<Day3 />} />

        </Routes>
        <Footer />  {/* Footer */}
      </Router>
     
      
    </>
  );
}

export default App;
