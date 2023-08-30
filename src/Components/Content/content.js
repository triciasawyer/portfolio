import React from 'react';
import Project from '../Projects/projects';
import profileImg from '../../images/imgp.png';
import capsDriver from '../../assets/caps-driver.png';
import capsFlowerV from '../../assets/caps-flowerV.png';
import capsWidgetV from '../../assets/caps-widgetV.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css';

const Content = () => {
  const info = {
    projects: "SOME OF MY LATEST WORK",
  };

  const projects = [
    {
      title: "Core administrative processing systems (CAPS system)",
      date: "May 2022",
      languages: "JavaScript, Node.js",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: [
        capsDriver,
        capsFlowerV,
        capsWidgetV,
      ],
    },
    {
      title: "Project 2",
      date: "August 2022",
      languages: "",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: [
        'https://via.placeholder.com/500x400',
        'https://via.placeholder.com/500x400',
        'https://via.placeholder.com/500x400',
      ],
    },
    {
      title: "Project 3",
      date: "September 2022",
      languages: "HTML, CSS",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: [
        'https://via.placeholder.com/500x400',
        'https://via.placeholder.com/500x400',
        'https://via.placeholder.com/500x400',
      ],
    },
  ];

  return (
    <>
      <div className="img-section">
        <img
          className="profile-img"
          src={profileImg}
          alt="Profile pic"
        />
        </div>
      <div className="content-container">
        <h1 className="projects-h1">{info.projects}</h1>

        <div className="project-list">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                date={project.date}
                languages={project.languages}
                details={project.details}
                images={project.images}
              />
            ))}
            </div>
          </div>
    </>
  );
}

export default Content;
