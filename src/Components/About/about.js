import React from 'react';
import Skills from '../Skills/skills';
import profImg from '../../images/imgp.png';
import './about.css';

const About = () => {
  return (
    <>
      <div className="about-con">
        <Skills />
        <div className="about-img">
          <div className="header-p">
            <h1 className="about-h1">about</h1>
            <p className="about-text1">I'm a full-stack Software Developer based in Cedar Rapids, Iowa.</p>
            {/* <p> With a background in teaching, I bring [Your Unique Skills] to the table.</p> */}
            <p className="about-text2">When I'm not creating digital magic, you'll find me out on the lake, cheering on my favorite sports teams, or watching the latest movies.</p>
          </div>
          <img src={profImg} alt="Tricia Sawyer" className="prof-img" />
        </div>
      </div>
    </>
  );
}

export default About;
