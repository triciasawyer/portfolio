import React from 'react';
import './contact.css';
          
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-h1">contact</h1>
        <p className="contact-text">Get in touch with me via social media or email.</p>
        <div className="contact-details">
          <p className="contact-info">
            📬 <a href="mailto:tricia.sawyer03@gmail.com" className="contact-link">tricia.sawyer03@gmail.com</a>
          </p>
          {/* <p>
          <a href="https://www.linkedin.com/in/triciasawyer-03dev/" className="linkedin-icon">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                      alt="LinkedIn"
            className='linkedin-logo'
            />
          </a>
          </p> */}
        </div>
      </div>
    </>
  );
}

export default Contact;
