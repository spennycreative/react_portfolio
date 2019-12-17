import React from "react";
import "../css/sidebyside.css";

const SideBySide = props => {
  return (
    <>
      <div className="body-component component--side-by-side">
        <div className="body-container">
          <div className="side-by-side-wrapper" id={props.layout}>
            <div className="side side-one">{props.sideOne}</div>
            <div className="side side-two">{props.sideTwo}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBySide;
