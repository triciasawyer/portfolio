import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contact.css';

const Contact = () => {
  const email = 'tricia.sawyer03@gmail.com';

  // Event handler
  const openEmailClient = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <div className="contact-container">
        <div className="title-p">
        <h1 className="contact-h1">contact</h1>
        <p className="contact-p">
          Get in touch with me via social media or email.
        </p>
        </div>
        <div className="contact-details">
            <span className="Email" role="img" aria-label="Email Icon" onClick={openEmailClient} style={{ cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />
              <p className='Email-tx'>Email</p>
            </span>
            <span>
              <p className="LinkedIn-tx"> LinkedIn</p>
            </span>

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
