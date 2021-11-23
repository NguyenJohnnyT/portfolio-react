import React, { useState, useEffect } from "react";
import Project from "../components/ProjectPage/ProjectCards/Project"
// import projects from "../projects.json"
import Wrapper from "../components/ProjectPage/Wrapper/Wrapper"
import "./style.css"
import { getProjects } from "../utils/API"

function Projects () {
  const [projects, setProjects] = useState([]);

    useEffect(() => { //! Fetches and sets page up
    const getProjList = async () => {
      let projList = await getProjects();
      setProjects(projList);
    }
    getProjList();
  }, []);

  return (
  <Wrapper>
  {projects.map((project) => {
    return (
      <Project
        key={project.id}
        project={project}
      />
    )
  })}
  </Wrapper>
  )
}

export default Projects