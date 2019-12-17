import React, { Component } from "react";
import Hero from "../components/Hero";
import SkillList from "../components/SkillList";
import skillsContent from "../content/skills";
import Container from "../components/Container";
import textBlock from "../molecules/textBlock";
import DynamicHeader from "../components/DynamicHeader";

class Skills extends Component {
  render() {
    return (
      <>
        <Hero heading="What can I do for you?" subheading="Develop, Maintain, Increase Performance, and more.." primary="/history" primaryText="My History" secondary="/contact" secondaryText="Hire Me" />
        <Container
          class="sm-body-component"
          content={textBlock(
            "",
            "When it comes to websites, so many people overlook the important aspects; such as Performance, and SEO. Yes, you can build a nice looking website on a lot of these ...Drag and Drop site builders, but are you really getting the website you need to drive business to your business? In my experience, that is not the case. I pride myself in creating performat websites, I guess you could say I am a site-speed nerd. Performance goes hand in hand with SEO, here is what I mean: If you have a slow website, and you are trying to rank high in the SERPS, it would benefit you to get a site speed audit. This will help guide you and your tech team in a good direction so you can increase your performance and increase your rankings in the SERPS."
          )}
        />
        <SkillList skills={skillsContent} />
        <DynamicHeader heading="Development Skills Breakdown" headingType="1" />
        <Container
          class="sm-body-component"
          content={textBlock(
            "HTML/DHTML",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )}
        />
        <Container
          class="sm-body-component"
          content={textBlock(
            "WordPress",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )}
        />
        <Container
          class="sm-body-component"
          content={textBlock(
            "CSS/SCSS",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )}
        />
        <Container
          class="sm-body-component"
          content={textBlock(
            "Vanilla JavaScript",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )}
        />
        <Container
          class="sm-body-component"
          content={textBlock(
            "ReactJS",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )}
        />
      </>
    );
  }
}

export default Skills;
