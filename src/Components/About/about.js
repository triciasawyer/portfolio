import React from 'react';
import Header from '../Header/header';
import './about.css';

const About = () => {
  return (
    <>
    <Header />
    <div className="about-container">
      <div className="about-header">
      </div>
      <div className="about-content">
        <div className="profile-image-container">
          <img
            src="your-profile-image-url.jpg"
            alt="Your Name"
            className="profile-image"
          />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm Tricia Sawyer, a passionate Front-End Developer based in Cedar Rapids, Iowa.
          </p>
          <p>
            I have a strong passion for creating visually appealing and user-friendly web experiences. With a background in teaching, I bring [Your Unique Skills] to the table.
          </p>
          <p>
            When I'm not coding, you can find me on the lake kyaking, or just enjoying the outdoors being active.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
