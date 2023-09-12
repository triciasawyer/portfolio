import React from 'react';
import Skills from '../Skills/skills';
import './about.css';

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1 className="about-heading">about.</h1>
      </div>
      <div className="about-content">
        <div className="profile-image-container">
          <img
            src="your-profile-image-url.jpg"
            alt="Tricia Sawyer"
            className="profile-image"
          />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm Tricia Sawyer, a passionate full-stack Developer based in Cedar Rapids, Iowa.
          </p>
          <p>
            With a background in teaching, I bring [Your Unique Skills] to the table.
          </p>
          <p>
            When I'm not coding, you can find me out on the lake, or simply enjoying the outdoors.
          </p>
          <Skills />
        </div>
      </div>
    </>
  );
}

export default About;
