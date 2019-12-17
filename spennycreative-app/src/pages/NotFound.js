import React from "react";
import Hero from "../components/Hero";

const NotFoundPage = () => {
  return (
    <>
      <Hero heading="404: Nothing Found Here :(" subheading="Please use a link below to navigate to a desired location" primary="/projects" primaryText="View Projects" secondary="/history" secondaryText="About Me" />
    </>
  );
};

export default NotFoundPage;
