import React from "react";
import { Link } from "react-router-dom";
import "../css/hero.css";

const Hero = props => {
  return (
    <>
      <div className="component--hero">
        <div className="hero-container container">
          <div className="content-container" style={{ padding: "25px 2.5%" }}>
            <h1>{props.heading}</h1>
            <p>{props.subheading}</p>
            <div className="cta-container">
              <Link className="btn btn-primary" to={props.primary}>
                {props.primaryText}
              </Link>
              <Link className="btn btn-secondary" to={props.secondary}>
                {props.secondaryText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
