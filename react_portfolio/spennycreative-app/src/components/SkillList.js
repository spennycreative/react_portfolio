import React from "react";
import { ProgressBar, Tooltip } from "react-mdl";
import "../css/skills.css";

const SkillList = ({ skills }) => {
  return (
    <>
      <div className="body-component component--skills-container">
        {skills.map((skill, key) => (
          <div className="skills-progress-bar-wrapper" key={key}>
            <Tooltip label={skill.tip}>
              <p>{skill.skillName}</p>
            </Tooltip>
            <ProgressBar progress={skill.skillLevel} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillList;
