import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css';
import Skills from '../Skills/skills';
import Header from '../Header/header';

const ExperienceItem = ({ experience }) => {
  return (
    <div className="experience-item">
      <h2>{experience.company}</h2>
      <p>{experience.title}</p>
      <p>{experience.years}</p>
    </div>
  );
};

const Content = () => {
  const info = {
    experience: "Experience",
  }


  const experience = [
    {
      company: "DeltaV Code School",
      title: "Part-Time Teaching Assistant",
      years: "July 2023 - present",
      // mainTech: ["JavaScript"],
      // technologies: ["VanillaJS", "HTML", "CSS", "React"],
    },
    {
      company: "College Community School District",
      title: "Assistant teacher",
      years: "June 2022 - Feb 2023"
    },
    {
      company: "Perfect Game",
      title: "Statistic keeper",
      years: "June 2020 - Aug 2021"
    },
  ];

  return (
    <>
    <Header />
    <div className="content-container">
      <div className="flex-container">
        <Skills />
        <div className="experience-list">
          <h1 className="h1-experience">{info.experience}</h1>
          {experience.map((item, index) => (
            <ExperienceItem key={index} experience={item} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Content;
