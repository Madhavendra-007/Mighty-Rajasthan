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
              <label htmlFor="name">Name :</label>
              <input type="text" name="name" required />
            </div>
  
            <div className="contactFormRow">
              <label htmlFor="phone">Mobile :</label>
              <PhoneInput
                country={'us'}
                value={phone}
                onChange={setPhone}
                // Additional props as needed
              />
               <input type="hidden" name="phone" value={phone} />
            </div>
  
            <div className="contactFormRow">
              <label htmlFor="email">E-mail :</label>
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
              <div className="socials socials1"></div>
              <div className="socials socials2"></div>
            </div>
          </div>
          </div>
      </>
    );
  }
  