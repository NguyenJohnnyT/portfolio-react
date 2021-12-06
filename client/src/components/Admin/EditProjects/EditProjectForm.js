import React, { useEffect, useState } from 'react'
import { useProjectContext } from '../../../utils/ProjectContext'
import './style.css'

export const EditProjectForm = () => {
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
    console.log('editform change', currentProject)
    setProjectForm({...currentProject})
  }, [currentProject])

  return (
    <>
      <label className='row editName'>
        Project name:
        <input
          onChange={(e) => setProjectForm(e.target.value)}
          type='text'
          value={projectForm.name}
        />
      </label>
      <label className='row editDesc'>
        Description:
        <input
          onChange={(e) => setProjectForm(e.target.value)}
          type='text'
          value={projectForm.description}
        />
      </label>
      <label className='row link'>
        GitHub link:
        <input
          onChange={(e) => setProjectForm(e.target.value)}
          type='text'
          value={projectForm.gitHub}
        />
      </label>
      <label className='row link'>
        Deploy link:
        <input
          onChange={(e) => setProjectForm(e.target.value)}
          type='text'
          value={projectForm.deploy}
        />
      </label>
      <label className='row link'>
        Picture Url (use imgur):
        <input
          onChange={(e) => setProjectForm(e.target.value)}
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
    </>
  )
}