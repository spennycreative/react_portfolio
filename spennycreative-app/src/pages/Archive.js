import React, { Component } from "react";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import projectContent from "../content/projects";
import "../css/projects.css";

class Archive extends Component {
  render() {
    return (
      <>
        <Hero heading="My Projects" subheading="To learn more about my involvement with each project, please view individually to get a better idea of my talents and skills" primary="/history" primaryText="My History" secondary="/contact" secondaryText="Hire Me" />
        <ProjectList projects={projectContent} />
      </>
    );
  }
}

export default Archive;
