export const getProjects = () => {
  return fetch('/api/project-skill-join', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};