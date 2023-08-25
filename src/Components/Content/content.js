import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css';
import Header from '../Header/header';
import Project from '../Projects/projects';

const Content = () => {
  const info = {
    projects: "SOME OF MY LATEST WORK",
  };

  const projects = [
    {
      title: "Project 1",
      date: "July 2022",
      languages: "JavaScript, React",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: [
        'https://via.placeholder.com/400x200',
        'https://via.placeholder.com/400x200',
        'https://via.placeholder.com/400x200',
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="content-container">
        <div className="flex-container">
        <div className="project-list">
          <h1 className='projects-h1'>{info.projects}</h1>
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
        </div>
    </>
  );
}

export default Content;
