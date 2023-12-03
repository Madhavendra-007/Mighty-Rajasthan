import './App.css';
import './Styling/Navbar.css';
import './Styling/Footer.css';
// import Preloader from './Components/preloader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import PrivacyPolicy from './Routes/PrivacyPolicy';
import CookiePolicy from './Routes/CookiePolicy';
import Day1 from './Routes/day1';
import Day2 from './Routes/day2';
import Day3 from './Routes/day3';

import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'; 


function App() {


  return (
    <>

        <Router>
        {/* Add the Preloader component */}
        {/* <Preloader />  */}
          <ScrollToTop /> {/* This component will handle scrolling to the top */}
          <Navbar /> {/* Navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/CookiePolicy" element={<CookiePolicy />} />
            <Route path="/day1" element={<Day1 />} />
            <Route path="/day2" element={<Day2 />} />
            <Route path="/day3" element={<Day3 />} />
          </Routes>
          <Footer />  {/* Footer */}
        </Router>

    </>
  );
}

export default App;
