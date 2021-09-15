import React from "react";
import "./style.css";
import placeholder from "../../../assets/img/placeholder/projectPlaceholder350x350.png";

function Project ({ project, visitLink }) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={project.name} src={project.pictures || placeholder} />
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
            <strong>Tech used: </strong> {project.skills || "N/A"}
          </li>
        </ul>
      </div>
      <span className="redirect" onClick={() => visitLink(project.gitHub || '#')}>
        REPO
      </span>
      <span className="redirect" onClick={() => visitLink(project.deploy || '#')}>
        Deploy
      </span>
    </div>
  )
}

export default Project