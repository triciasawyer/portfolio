import React from 'react';
import profileImg from '../../images/imgp.png';
import profileTransition from '../../images/imgp-transition.png';
import capsDriver from '../../assets/caps-driver.png';
// import capsFlowerV from '../../assets/caps-flowerV.png';
// import capsWidgetV from '../../assets/caps-widgetV.png';
import todoAdmin from '../../assets/todoAdmin.png';
// import todoSettings from '../../assets/todoSettings.png';
// import todoUser from '../../assets/todoUser.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css';

const Content = () => {
  const info = {
    projects: "SOME OF MY LATEST WORK",
  };

  const projects = [
    {
      title: "Core administrative processing systems (CAPS)",
      date: "May 2023",
      languages: "JavaScript, Node.js",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: capsDriver,
      // capsFlowerV,
      // capsWidgetV,
    },
    {
      title: "Todo app",
      date: "July 2023",
      languages: "JavaScript, mantine core",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: todoAdmin,
      // todoUser,
      // todoSettings,,
    },
    {
      title: "Project 3",
      date: "September 2022",
      languages: "HTML, CSS",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: 'https://via.placeholder.com/500x400',
    },
  ];

  return (
    <>
      <div className="img-section">
        <img className="profile-img" src={profileImg} alt="Profile pic" />
        <img className="profile-imgT" src={profileTransition} alt="Profile pic transition" />
      </div>
      <div className="content-container">
        <h1 className="projects-h1">{info.projects}</h1>

        <div className="project-list">
          {projects.map((project, index) => (
            <div className='project-card' key={index}>
              <img src={project.image} alt={project.title} />
              <h2 className='pro-title'>{project.title}</h2>
              <p className='pro-date'>Date: {project.date}</p>
              {/* <p>Languages: {project.languages}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Content;
