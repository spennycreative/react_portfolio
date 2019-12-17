import React, { Component } from "react";
import Hero from "../components/Hero";

class Contact extends Component {
  render() {
    return (
      <>
        <Hero heading="Are you ready for a <strong> hire?" subheading="HTML, CSS/SCSS, JavaScript (es6+ and React), WordPress, and more.." primary="/projects" primaryText="View Projects" secondary="/history" secondaryText="About Me" />
      </>
    );
  }
}

export default Contact;
