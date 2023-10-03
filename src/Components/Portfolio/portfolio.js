import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Resty from '../../assets/resty.png';
import Algorithms from '../../assets/datastructures.png'
import AdventureTime from '../../assets/adventure-time-fe.png';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Resty",
      date: "June 2023",
      link: "https://github.com/triciasawyer/resty",
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
      title: "Data Structures and Algorithm",
      date: "May 2023",
      link: "https://github.com/triciasawyer/data-structures-and-algorithms/tree/main/javascript/401-code-challenges",
      images: Algorithms,
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
      title: "Adventure time",
      date: "July 2023",
      link: "https://github.com/orgs/final-project-401/repositories",
      images: AdventureTime,
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
            {/* <div className="click-indicator"> */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
            </a>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
