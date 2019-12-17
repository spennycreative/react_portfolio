import React from "react";

const CustomHeadTag = props => {
  const Tag = `h${props.headingType}`;
  return (
    <>
      <Tag className="dynamic-heading" style={{ textAlign: "center" }}>
        {props.heading}
      </Tag>
    </>
  );
};

export default CustomHeadTag;
