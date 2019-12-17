import React, { Component } from "react";
import Hero from "../components/Hero";
import SideBySide from "../components/SideBySide";
import textBlock from "../molecules/textBlock";
import imageBlock from "../molecules/imageBlock";

class History extends Component {
  render() {
    return (
      <>
        <Hero heading="The Front End Developer" subheading="Intelectually curious, committed, dedicated, and inspired" primary="/projects" primaryText="View Work" secondary="/contact" secondaryText="Hire Me" />
        <SideBySide
          layout="regular-side-by-side"
          sideOne={textBlock(
            "Where to begin...",
            "Believe it or not, the Spennycreative site that you’re on is actually a fully responsive web design! Like all of my designs, I start with “mobile first”. To see it in action, open Spennycreative on a desktop browser and adjust the size anyway you want. You should see the layout magically adjust itself to more comfortably fit the new width of the browser, even if you make the page as small as a cell phone or even a mobile watch."
          )}
          sideTwo={imageBlock("https://spennycreative.com/wp-content/uploads/2018/02/spennyCreativeDesginConcept-e1517546576330.png", "Responsive Websites")}
        />
      </>
    );
  }
}

export default History;
