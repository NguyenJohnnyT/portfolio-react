import React from "react";
import "./style.css";

function Project (props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.title}</strong>
          </li>
          <li>
            <strong>Description: </strong> {props.description}
          </li>
          <li>
            <strong>Tech used: </strong> {props.tech}
          </li>
        </ul>
      </div>
      <span onClick={() => props.visitLink(props.repoLink)}>
        REPO
      </span>
      <span onClick={() => props.visitLink(props.deployLink)}>
        Deploy
      </span>
    </div>
  )
}

export default Project