import React, { useState, useEffect } from "react";
import "./style.css";
import ListProjects from "../components/Admin/ListProjects/ListProjects";
import AdminForm from "../components/Admin/AdminForm/AdminForm";
import { getProjects } from "../utils/API";
import Auth from "../utils/auth";

const Admin = () => {
  const [ project, setProject ] = useState([]);

  useEffect(() => {
    const asyncGetProjects = async () => {
      let results = await getProjects(); 
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
      setProject(results)
    };
    asyncGetProjects();
  }, [])

  return (
    <>
    {Auth.loggedIn()
    ? ( 
       <>
          <div className='row'>
            <ListProjects className='col' projectList={project} />
          </div>
          <div className='row'>
            <AdminForm className='col'/>
          </div>
       </>
      )
    : <div>You must be logged in!</div>
    }
  </>
  )
}

export default Admin;