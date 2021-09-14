import React from "react";
import "./style.css";
import placeholder from "../../../assets/img/placeholder/projectPlaceholder350x350";

function Project ({ title, pictures, description, skills, visitLink, gitHub, deploy }) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={title} src={pictures || placeholder} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{title || "No title given"}</strong>
          </li>
          <li>
            <strong>Description: </strong> {description || "No description given"}
          </li>
          <li>
            <strong>Tech used: </strong> {skills || "N/A"}
          </li>
        </ul>
      </div>
      <span className="redirect" onClick={() => visitLink(gitHub || '#')}>
        REPO
      </span>
      <span className="redirect" onClick={() => visitLink(deploy || '#')}>
        Deploy
      </span>
    </div>
  )
}

export default Project