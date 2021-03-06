import React from "react";
import Skill from "./Skill";
import "./style.css";
import placeholder from "../../../assets/img/placeholder/projectPlaceholder350x350.png";
import github from "../../../assets/img/misc/github.png"
import web from "../../../assets/img/misc/web.png"

function Project ({ project }) {

  return (
    <div className="card">
      <div className="img-container">
        <img alt={project.name} src={project.pictures || placeholder} />
      </div>
      <div className="card-body content p-2">
        <p className="projTitle">{project.name || "No name given"}</p>
        <ul className="ps-2">
          <li>
            <strong className='strongTitle'>Description: </strong> {project.description || "No description given"}
          </li>
          <li>
            <strong className='strongTitle'>Tech Used:</strong>  {project.assigned_skills.length !== 0 ? 
            project.assigned_skills.map(skill => <Skill skill={skill.name} key={skill.id} />) 
            : "N/A"
            }
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-around card-footer">
        <a href={project.gitHub || '#'}>
        <img 
        alt="github link" 
        src={github} 
        width="50px" height="50px" 
        className="redirect nav-icon" 
        /></a>
        <a href={project.deploy || '#'}>
        <img 
        alt="deploy link" 
        src={web} 
        width="50px" height="50px" 
        className="redirect nav-icon" 
        /></a>
      </div>
    </div>
  )
}

export default Project