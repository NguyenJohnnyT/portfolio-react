const { Project } = require('../models')

const projectData = [
  {
    name: 'TAMAGACHA',
    description: 'Take care of new pets',
    gitHub: 'https://github.com/NguyenJohnnyT/Tamagacha',
    deploy: 'tamagacha.herokuapp.com',
    user_id: 1
  },
  {
    name: 'Pokebattler',
    gitHub: 'https://github.com/NguyenJohnnyT/pokebattler',
    deploy: 'https://pokebattlerproject.herokuapp.com/',
    description: 'Turn-based game for monster versus monster',
    user_id: 1
  }
];

const seedProject = () => Project.bulkCreate(projectData);

module.exports = seedProject

