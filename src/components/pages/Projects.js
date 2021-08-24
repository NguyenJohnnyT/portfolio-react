import React from "react";
import Project from "../ProjectCards/Project"
import projects from "../../projects.json"
import "./style.css"

class Projects extends React.Component {
  state = {
    projects: projects
  }

  visitLink = link => {
    return 
    //TODO: add redirect
  }

  render() {
    console.log(this.state);
    return (
      <div>
      {this.state.projects.map(project => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          tech={project.tech}
          visitLink={this.visitLink}
          repoLink={project.repoLink}
          deployLink={project.deployLink}
        />
      ))}
      </div>
    )
  }
}

export default Projects