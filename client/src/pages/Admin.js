import React, { useState, useEffect } from "react";
import "./style.css";
import ListProjects from "../components/Admin/ListProjects/ListProjects";
import AdminForm from "../components/Admin/AdminForm/AdminForm";
import getProjects from "../utils/API";

const Admin = () => {
  const [ project, setProject ] = useState([]);

  useEffect(() => {
    const asyncGetProjects = async () => {
      let results = await getProjects();
      setProject(results)
    };
    asyncGetProjects();
  }, [project])

  return (
    <>
      <div className='row'>
        <ListProjects className='col' projectList={project} />
      </div>
      <div className='row'>
        <AdminForm className='col'/>
      </div>
    </>
  )
}

export default Admin;