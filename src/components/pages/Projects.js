import React from "react";
import Project from "../ProjectPage/ProjectCards/Project"
import projects from "../../projects.json"
import Wrapper from "../ProjectPage/Wrapper/Wrapper"
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
      <Wrapper>
      {this.state.projects.map(project => (
        <Project
          key={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          tech={project.tech}
          visitLink={this.visitLink}
          repoLink={project.repoLink}
          deployLink={project.deployLink}
        />
      ))}
      </Wrapper>
    )
  }
}

export default Projects