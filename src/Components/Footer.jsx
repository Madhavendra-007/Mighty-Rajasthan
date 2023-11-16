import React from 'react'

export default function Footer() {
  return (
    <footer className='Footer'>
        <div className='FooterContainer'>
          <div className="LinksContainer footerLogos">
            <div className="footerLogoMomentous"></div>
            {/* <div className="footerLogoMightyRajasthan"></div> */}
          </div>
          <div className="LinksContainer">
            <h1>Navigation</h1>
            <a href="/" className="FooterLinks">Home</a>
            <a href="/Contact" className="FooterLinks">Contact Us</a>
            <a href="/About" className="FooterLinks">About Us</a>

          </div>
          <div className="LinksContainer">
            <h1>Our Policies</h1>
            <a href="https://vinodjangid.me/Mighty-Rajasthan" className="FooterLinks">Privacy Policy</a>
            <a href="https://vinodjangid.me/Mighty-Rajasthan" className="FooterLinks">Travel Policy</a>
            <a href="https://vinodjangid.me/Mighty-Rajasthan" className="FooterLinks">Refund Policy</a>
            <a href="https://vinodjangid.me/Mighty-Rajasthan" className="FooterLinks">Cookie Policy</a>
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
