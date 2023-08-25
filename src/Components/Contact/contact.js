import React from 'react';
import Header from '../Header/header';
import './contact.css';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        <h2 className="contact-title">contact.</h2>
        <p className="contact-text">Get in touch with me via social media or email.</p>
        <div className="contact-details">
          <p className="contact-info">
            📬 Email: <a href="mailto:tricia.sawyer03@gmail.com" className="contact-link">tricia.sawyer03@gmail.com</a>
          </p>
          <p className="contact-info">
            🌐 LinkedIn: <a href="https://www.linkedin.com/in/triciasawyer-03dev/" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/triciasawyer-03dev/</a>
          </p>
          <p className="contact-info">
            💻 GitHub: <a href="https://github.com/triciasawyer" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/triciasawyer</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
