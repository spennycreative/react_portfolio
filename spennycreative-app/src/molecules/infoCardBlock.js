import React from "react";

const infoCardBlock = props => {
  return (
    <>
      <div className="molecule--info-card-block">
        <div className="molecule-container">
          <img src={props.imageSrc} alt={props.imageAlt} />
          <h3>{props.heading}</h3>
          <hr />
          <p>{props.text}</p>
          <a href={props.link}>{props.linkText}</a>
        </div>
      </div>
    </>
  );
};

export default infoCardBlock;
