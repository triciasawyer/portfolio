import React from 'react';
import Skills from '../Skills/skills';
import profImg from '../../images/aboutProf.png';
import './about.css';

const About = () => {
  return (
    <>
      <div className="about-con">
        <div className="header-p">
      <div className="about-header">
        <h1 className="about-h1">about</h1>
        </div>
        <div className="about-text">
          <p>
            I'm a full-stack Software Developer based in Cedar Rapids, Iowa.
          </p>
          <p>
            With a background in teaching, I bring [Your Unique Skills] to the table.
          </p>
          <p>
            When I'm not creating digital magic, you'll find me out on the lake or watching the newest movies.
          </p>
          </div>
          </div>
          <Skills />
        <img src={profImg} alt="Tricia Sawyer" className="prof-img"/>
        </div>
    </>
  );
}

export default About;
