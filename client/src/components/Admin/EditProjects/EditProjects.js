import React, { useEffect, useState } from "react";
import { useProjectContext } from "../../../utils/ProjectContext"
import { EditProjectForm } from "./EditProjectForm";

function EditProjects () {
  const { currentProject } = useProjectContext();
  const [ project, setProject ] = useState({});

  useEffect(() => {
    setProject(currentProject)
  }, [currentProject])

  return (
    <div className='col'>
      {project.name !== '' ? 
      <EditProjectForm id={project.id} /> : 
      (<>Select a project!</>)}
    </div>
  )
}

export default EditProjects