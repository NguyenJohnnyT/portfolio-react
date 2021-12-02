import React, { useEffect, useState } from "react";
import { useProjectContext } from "../../../utils/ProjectContext"

function EditProjects () {
  const { currentProject } = useProjectContext()
  return (
    <div className='col'>
      Hello
    </div>
  )
}

export default EditProjects