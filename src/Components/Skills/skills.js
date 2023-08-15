import React from 'react';
import { DiJavascript1, DiReact, DiCss3, DiHtml5, DiMongodb, DiNodejs } from 'react-icons/di';
import './skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <h1 className="section-title">Skills</h1>
        <div className="skills-icons">
          <DiHtml5 className="skill-icon" />
          <DiCss3 className="skill-icon" />
          <DiJavascript1 className="skill-icon" />
          <DiReact className="skill-icon" />
          <DiNodejs className="skill-icon" />
          <DiMongodb className="skill-icon" />

        </div>
      </div>
    </section>
  );
};

export default Skills;
