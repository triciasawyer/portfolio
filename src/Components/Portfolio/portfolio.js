import React from 'react';
import Resty from '../../images/resty.png';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Resty",
      date: "May 2023",
      images: Resty,
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
      <h1 className='portfolio-h1'>portfolio</h1>
      <div className="port-grid">
        {projects.map((project, index) => (
          <div className="port-card" key={index}>
            <img src={project.images} alt={project.title} />
            <h2 className="card-title">{project.title}</h2>
            <p className="card-date">{project.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
