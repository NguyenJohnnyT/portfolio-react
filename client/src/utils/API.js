export const getProjects = async () => {
  let response = await fetch('/api/project-skill-join', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let data = await response.json();
  return data
};

export const editProject = async (projectData, id) => {
  console.log('putting..');
  console.log(projectData)
  let response = await fetch(`/api/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: projectData.name,
      description: projectData.description,
      gitHub: projectData.gitHub,
      deploy: projectData.deploy,
      pictures: projectData.pictures
    })
  });
  console.log(response)
  if (response.ok) {
    return true
  } else return false
}

export const createProjects = async () => {
  return
}

export const createUser = (userData) => {
  return fetch('/api/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};