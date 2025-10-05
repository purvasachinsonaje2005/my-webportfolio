import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>TrackNStock</h3>
          <p>Track and manage stock seamlessly</p>
          <a href="https://github.com/purvasachinsonaje2005/TrackNStock" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <div className="project-card">
          <h3>MyIISApp</h3>
          <p>Automated Deployment to IIS using Azure DevOps</p>
          <a href="https://github.com/purvasachinsonaje2005/MyIISApp" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <div className="project-card">
          <h3>Shiksha</h3>
          <p>AI-based student dropout prediction and engagement dashboard</p>
          <a href="https://github.com/jagrutidesale04/Shiksha" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
