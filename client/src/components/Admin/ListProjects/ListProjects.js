import React, { useEffect, useState } from "react";

/*
 projectList == 
  [
    {
      id: int, name: str, description: str, gitHub: str, deploy: str, pictures: str, date: str, user_id: int,
      assigned_skills: [
                        {
                          id: int, name: str, picture: str,
                          projectSkills: { id }
                        }, ...
      ]
    }, ...
  ]
 */
function ListProjects ({ projectList }) { //props.projectList
  return (
    <>
    {projectList.forEach(project => {
      return project.name
    })}
    </>
  )
}

export default ListProjects