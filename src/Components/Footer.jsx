import React from 'react'

export default function Footer() {
  const footerLogoClick = () => {
    window.open("/About", "_self");
  };
  return (
    <footer className='Footer'>
        <div className='FooterContainer'>
          <div className="LinksContainer footerLogos"
          onClick={footerLogoClick}>
            {/* <div className="footerLogoMomentous"></div>
            <div className="footerLogoMightyRajasthan"></div> */}
          </div>
          <div className="LinksContainer">
            <h1>General</h1>
            <a href="/" className="FooterLinks">Home</a>
            <a href="/Contact" className="FooterLinks">Contact Us</a>
            <a href="/About" className="FooterLinks">About Us</a>

          </div>
          <div className="LinksContainer">
            <h1>Our Policies</h1>
            <a href="/PrivacyPolicy" className="FooterLinks">Privacy Policy</a>
            <a href="https://vinodjangid.me/Mighty-Rajasthan" className="FooterLinks">Travel Policy</a>
            <a href="https://vinodjangid.me/Mighty-Rajasthan" className="FooterLinks">Refund Policy</a>
            <a href="/CookiePolicy" className="FooterLinks">Cookie Policy</a>
          </div>


          <div className="LinksContainer">
            <h1>Useful Links</h1>
          <a href="https://vinodjangid.me/Mighty-Rajasthan" className="FooterLinks">Terms & Conditions</a>
            <a href="https://vinodjangid.me/Mighty-Rajasthan" className="FooterLinks">FAQs</a>

          </div>
        </div>
        <div className='copyrightSection'>
        <p>Momentous Holidays &#169; Copyright 2023 | All rights reserved</p>
        </div>
    </footer>
  )
}
