import React from 'react';
import Nav from '../Header/nav';
import './contact.css';

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="contact-container">
        <h2 className="contact-title">Let's Get in Touch!</h2>
        <p className="contact-text">If you'd like to get in touch with me, whether it's for job opportunities, collaboration, or just to say hi, feel free to reach out!</p>
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
