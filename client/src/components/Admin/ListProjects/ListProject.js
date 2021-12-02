import React from "react";
import { useProjectContext } from "../../../utils/ProjectContext"

function ListProject ({ project }) {
  const { addProject } = useProjectContext();


  return (
    <div onClick={() => addProject(project)} className='row'>
      {project.name}
    </div>
  )
}

export default ListProject