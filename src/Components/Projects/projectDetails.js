import React from 'react';

const ProjectDetails = ({ match, projects }) => {
  const projectId = match.params.id;
  const project = projects[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>Date: {project.date}</p>
      <p>Languages: {project.languages}</p>
      <p>Details: {project.details}</p>
    </div>
  );
};

export default ProjectDetails;
