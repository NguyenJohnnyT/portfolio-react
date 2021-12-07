import React, { useEffect, useState } from 'react'
import { useProjectContext } from '../../../utils/ProjectContext'
import './style.css'
import { editProject } from "../../../utils/API"

export const EditProjectForm = ({ id }) => {
  const { currentProject } = useProjectContext();
  const [projectForm, setProjectForm] = useState(
    {
      name: '',
      description: '',
      gitHub: '',
      deploy: '',
      pictures: '',
      date: '',
    }
  )

  useEffect(() => {
    setProjectForm({...currentProject});
  }, [currentProject])

  const editProjectHandler = async (e) => {
    e.preventDefault();
    const response = await editProject(projectForm, id);
    if (response) {
      document.location.reload()
    } else alert('Error updating database!')
  }
  return (
    <>
      <label className='row editName'>
        Project name:
        <input
          onChange={(e) => setProjectForm({...projectForm, name: e.target.value})}
          type='text'
          value={projectForm.name}
        />
      </label>
      <label className='row editDesc'>
        Description:
        <input
          onChange={(e) => setProjectForm({...projectForm, name: e.target.value})}
          type='text'
          value={projectForm.description}
        />
      </label>
      <label className='row link'>
        GitHub link:
        <input
          onChange={(e) => setProjectForm({...projectForm, name: e.target.value})}
          type='text'
          value={projectForm.gitHub}
        />
      </label>
      <label className='row link'>
        Deploy link:
        <input
          onChange={(e) => setProjectForm({...projectForm, name: e.target.value})}
          type='text'
          value={projectForm.deploy}
        />
      </label>
      <label className='row link'>
        Picture Url (use imgur):
        <input
          onChange={(e) => setProjectForm({...projectForm, name: e.target.value})}
          type='text'
          value={projectForm.pictures}
        />
      </label>
      {/* <label>
        Date:
        <input
          onChange={(e) => setProjectForm(e.target.value)}
          type='text'
          value={projectForm.date}
        />
      </label> */}
      {id ? 
      <button onClick={editProjectHandler} disabled={false}>
        Submit Changes
      </button> 
      : 
      <button onClick={editProjectHandler} disabled={true}>
        Submit Changes
      </button>
      }
      
    </>
  )
}