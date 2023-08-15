import React from 'react';

const ExperienceItem = ({ experience }) => {
    return (
      <div>
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
        mainTech: ["JavaScript"],
        technologies: ["VanillaJS", "HTML", "CSS", "React"],
    },
    {
        company: "College Community School District",
        title: "Assistant teacher",
        years: "June 2022 - Feb 2023",
        mainTech: [],
        technologies: [],
    },
    {
        company: "Perfect Game",
        title: "Statistic keeper",
        years: "June 2020 - Aug 2021",
        mainTech: ["Used"],
        technologies: [],
    },
];

return (
    <div>
<h1>{info.experience}</h1>
      {experience.map((item, index) => (
        <ExperienceItem key={index} experience={item} />
      ))}    </div>
  );
}


export default Content;
