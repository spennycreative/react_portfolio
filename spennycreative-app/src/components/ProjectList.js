import React from "react";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => (
  <>
    <div className="body-component">
      <div className="body-container">
        {projects.map((project, key) => (
          <Link className="project-list-item" key={key} to={`/project/${project.name}`}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.snippet}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
);

export default ProjectList;
