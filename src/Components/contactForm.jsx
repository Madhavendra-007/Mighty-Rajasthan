import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "../Styling/contactForm.css";



export default function ContactForm() {
    const [phone, setPhone] = useState('');
  
    return (
      <>
      <div className="rootAlign">
        <div className="contactForm">
          <form action="https://formsubmit.co/rajasthan.mighty@gmail.com" method="POST">
          
              <div className="contactFormHeading"> </div>
           
            <div className="contactFormRow">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" required />
            </div>
  
            <div className="contactFormRow">
              <label htmlFor="phone">Mob.:</label>
              <PhoneInput
                country={'us'}
                value={phone}
                onChange={setPhone}
                // Additional props as needed
              />
               <input type="hidden" name="phone" value={phone} />
            </div>
  
            <div className="contactFormRow">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" required />
            </div>
            <div className="contactFormSubmitRow">
            <button type="submit" id="submit">Submit</button>
            <div className="submitDesc">*We will reach out to you</div>
            </div>
          </form>
        </div>
          <div className="getInTouch">
            <div className="contactFormHeading getInTouchHeading"></div>
            <div className="socialsAlign">
                      {/* Social 1 */}
                <a href="https://wa.me/9314643795?text=I%27m%20interested%20in%20Mighty-Rajasthan%20tour%20package" target="_blank" rel="noopener noreferrer">
                  <div className="socials socials1"></div>
                </a>

                {/* Social 2 */}
                <a href="mailto:rajasthan.mighty@gmail.com" target="_blank" rel="noopener noreferrer">
                  <div className="socials socials2"></div>
                </a>
            </div>
          </div>
          </div>
      </>
    );
  }
  