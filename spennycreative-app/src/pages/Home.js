import React, { Component } from "react";
import Hero from "../components/Hero";
import SideBySide from "../components/SideBySide";
import textBlock from "../molecules/textBlock";
import imageBlock from "../molecules/imageBlock";
import ProjectList from "../components/ProjectList";
import projectContent from "../content/projects";
import SkillList from "../components/SkillList";
import skillsContent from "../content/skills";
import DynamicHeader from "../components/DynamicHeader";

class Home extends Component {
  render() {
    return (
      <>
        <Hero heading="Hi I am Spencer Green" subheading="I'm a Front End Developer from Utah, see what drives me!" primary="/projects" primaryText="View Projects" secondary="/contact" secondaryText="Hire Me" />
        <SideBySide
          layout="regular-side-by-side"
          sideOne={textBlock(
            "Is Your Website Responsive?",
            "Believe it or not, the Spennycreative site that you’re on is actually a fully responsive web design! Like all of my designs, I start with “mobile first”. To see it in action, open Spennycreative on a desktop browser and adjust the size anyway you want. You should see the layout magically adjust itself to more comfortably fit the new width of the browser, even if you make the page as small as a cell phone or even a mobile watch."
          )}
          sideTwo={imageBlock("https://spennycreative.com/wp-content/uploads/2018/02/spennyCreativeDesginConcept-e1517546576330.png", "Responsive Websites")}
        />
        <br />
        <DynamicHeader heading="Website Project Case Studies" headingType="2" />
        <ProjectList projects={projectContent} />
        <br />
        <DynamicHeader heading="Skills That Pay The Bills" headingType="2" />
        <SkillList skills={skillsContent} />
      </>
    );
  }
}

export default Home;
