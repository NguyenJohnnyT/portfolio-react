import React from "react";
import ListProject from "./ListProject"
import "./style.css"
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
    <div className='col listProjects'>
    {projectList.map( project =>
        <ListProject 
          key={project.id}
          project={project}
          className='row'
        />
      )
    }
    </div>
  )
}

export default ListProjects