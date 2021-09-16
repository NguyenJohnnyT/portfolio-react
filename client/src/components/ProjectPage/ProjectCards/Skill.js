import React from "react";
import './style.css';

const Skill = ({skill}) => {
  // console.log(skill);
  return (
    <span>{skill} <strong className="inBetweenSkills">|</strong> </span>
  )
}
export default Skill