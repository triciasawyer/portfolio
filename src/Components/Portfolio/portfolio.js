import React from 'react';
import Project from '../Projects/projects';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      date: "May 2023",
      images: ["https://via.placeholder.com/500x400"],
    },
    {
      title: "Project 2",
      date: "July 2023",
      images: ["https://via.placeholder.com/500x400"],
    },
    {
      title: "Project 3",
      date: "September 2022",
      images: ["https://via.placeholder.com/500x400"],
    },
    {
      title: "Project 4",
      date: "September 2022",
      images: ["https://via.placeholder.com/500x400"],
    },
    {
      title: "Project 5",
      date: "September 2022",
      images: ["https://via.placeholder.com/500x400"],
    },
    {
      title: "Project 6",
      date: "September 2022",
      images: ["https://via.placeholder.com/500x400"],
    },
    {
      title: "Project 7",
      date: "September 2022",
      images: ["https://via.placeholder.com/500x400"],
    },
    {
      title: "Project 8",
      date: "September 2022",
      images: ["https://via.placeholder.com/500x400"],
    },
    {
      title: "Project 9",
      date: "September 2022",
      images: ["https://via.placeholder.com/500x400"],
    },
    {
      title: "Project 10",
      date: "September 2022",
      images: ["https://via.placeholder.com/500x400"],
    },
    {
      title: "Project 11",
      date: "September 2022",
      images: ["https://via.placeholder.com/500x400"],
    },
    {
      title: "Project 12",
      date: "September 2022",
      images: ["https://via.placeholder.com/500x400"],
    },
    
  ];

  return (
    <div className='portfolio-container'>
      <h1>portfolio.</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            date={project.date}
            images={project.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
