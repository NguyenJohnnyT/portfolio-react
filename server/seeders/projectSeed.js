const { Project } = require('../models')

const projectData = [
  {
    name: 'TAMAGACHA',
    description: 'Take care of new pets',
    user_id: 1
  },
  {
    name: 'Pokebattler',
    description: 'Turn-based game for monster versus monster',
    user_id: 1
  }
];

const seedProject = () => Project.bulkCreate(projectData);

module.exports = seedProject

