import React from "react";
import Skill from "./Skill";
import "./style.css";
import placeholder from "../../../assets/img/placeholder/projectPlaceholder350x350.png";
import github from "../../../assets/img/misc/github.png"
import web from "../../../assets/img/misc/web.png"

function Project ({ project, visitLink }) {
  console.log(project);
  return (
    <div className="card">
      <div className="img-container">
        <iframe title={project.name} width="340" height="300" src={project.pictures || placeholder} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{project.name || "No name given"}</strong>
          </li>
          <li>
            <strong>Description: </strong> {project.description || "No description given"}
          </li>
          <li>
            <strong>Tech used: </strong> {project.assigned_skills.length !== 0 ? 
            project.assigned_skills.map(skill => <Skill skill={skill.name} />) 
            : "N/A"
            }
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-around">
      <img 
      alt="github link" 
      src={github} 
      width="50px" height="50px" 
      className="redirect" 
      onClick={() => visitLink(project.gitHub || '#')} />
      <img 
      alt="deploy link" 
      src={web} 
      width="50px" height="50px" 
      className="redirect" 
      onClick={() => visitLink(project.deploy || '#')} />
      </div>
    </div>
  )
}

export default Project