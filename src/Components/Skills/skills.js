import React from 'react';
import { DiJavascript1, DiReact, DiCss3, DiHtml5, DiMongodb, DiNodejs } from 'react-icons/di';
import './skills.css';

const Skills = () => {
  const skillsData = [
    { icon: <DiHtml5 className="skill-icon" />, name: 'HTML5' },
    { icon: <DiCss3 className="skill-icon" />, name: 'CSS3' },
    { icon: <DiJavascript1 className="skill-icon" />, name: 'JavaScript' },
    { icon: <DiReact className="skill-icon" />, name: 'React' },
    { icon: <DiNodejs className="skill-icon" />, name: 'Node' },
    { icon: <DiMongodb className="skill-icon" />, name: 'MongoDB' },
  ];

  return (
    <div className="skills-section">
      <h1 className="section-title">Skills</h1>
      <div className="skills-icons">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <div className="icon-container">
              {skill.icon}
              <span className="skill-name">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
