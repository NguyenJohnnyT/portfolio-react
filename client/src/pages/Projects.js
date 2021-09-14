import React, { useState, useEffect } from "react";
import Project from "../components/ProjectPage/ProjectCards/Project"
// import projects from "../projects.json"
import Wrapper from "../components/ProjectPage/Wrapper/Wrapper"
import "./style.css"
import { getProjects } from "../utils/API"

function Projects () {
  const [projects, setProjects] = useState([]);

  useEffect(() => { //! Fetches and sets page up
    const getProjList = async () => await getProjects();
    let projList = getProjList();
    console.log(projList);
    setProjects(projList);
  }, []);

  const visitLink = link => {
    window.location.href = link
    //TODO: add redirect
  }

  
  return (
  <Wrapper>
  {projects.map(project => (
    <Project
      key={project.id}
      name={project.name}
      pictures={project.pictures}
      description={project.description}
      skills={project.assigned_skills}
      visitLink={visitLink}
      gitHub={project.gitHub}
      deploy={project.deploy}
    />
  ))}
  </Wrapper>
  )
}

export default Projects