import React, { useEffect, useState } from "react";
import { useProjectContext } from "../../../utils/ProjectContext"
import { EditProjectForm } from "./EditProjectForm";

function EditProjects () {
  const { currentProject } = useProjectContext();
  const [ project, setProject ] = useState({});

  useEffect(() => {
    console.log('edit component', currentProject);
    setProject(currentProject)
  }, [currentProject])
  return (
    <div className='col'>
      {project ? 
      <EditProjectForm project={project} /> : 
      (<>Select a project!</>)}
    </div>
  )
}

export default EditProjects