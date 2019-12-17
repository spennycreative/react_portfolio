import React from "react";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import projectContent from "../content/projects";
import NotFoundPage from "./NotFound";

const ProjectSingle = ({ match }) => {
  const name = match.params.name;
  const project = projectContent.find(project => project.name === name);
  if (!project) return <NotFoundPage />;
  const otherProjects = projectContent.filter(project => project.name !== name);

  return (
    <>
      <Hero heading={project.title} subheading="" primary="/projects" primaryText="View Work" secondary="/contact" secondaryText="Hire Me" />
      <div className="project-single-content" id="readContent">
        {project.content.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
        <br />
        <hr />
        <h3>Other Articles</h3>
        <ProjectList projects={otherProjects} />
      </div>
    </>
  );
};

export default ProjectSingle;
