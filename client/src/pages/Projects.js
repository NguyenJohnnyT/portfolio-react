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

  const visitLink = link => {
    window.location.href = link
  }

  return (
  <Wrapper>
  {projects.map((project) => {
    return (
      <Project
        key={project.id}
        project={project}
        visitLink={visitLink}
      />
    )
  })}
  </Wrapper>
  )
}

export default Projects