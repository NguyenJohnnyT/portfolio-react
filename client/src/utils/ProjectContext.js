import React, { useState, useContext } from 'react';

export const ProjectContext = React.createContext();

export const useProjectContext = () => useContext(ProjectContext);

export default function ProjectProvider({ children }) {
  const [currentProject, setCurrentProject] = useState()

  const addProject = (project) => {
    console.log('context change', project);
    setCurrentProject(project)
  }
  return (
    <ProjectContext.Provider value={{currentProject, addProject }}>
      {children}
    </ProjectContext.Provider>
  )
}