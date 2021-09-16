const { Project } = require('../models')

const projectData = [
  {
    name: 'TAMAGACHA',
    description: "Collect all five Tamas -- they each have different stories! Feed, play, and take them out.  See what they're saying when they're hungry, sad, or happy.  Make sure to keep up and check on them to see their happiness level or else they will die",
    gitHub: 'https://github.com/NguyenJohnnyT/Tamagacha',
    deploy: 'https://tamagacha.herokuapp.com',
    pictures: 'https://drive.google.com/file/d/1atayFkoS6HBRKfSzprNV51nlOHP7P3n2/preview',
    user_id: 1
  },
  {
    name: 'Pokebattler',
    gitHub: 'https://github.com/NguyenJohnnyT/pokebattler',
    deploy: 'https://pokebattlerproject.herokuapp.com/',
    description: "Gotta Catch 'Em All! Enjoy a turn-based game called Pokebattler.  Create an account and pick your starter Pokemon: Bulbasaur, Squirtle, or Charmander.  Defeat a random number of Darkrai to beat the game. Current work is on hold for TAMAGACHA.",
    pictures: 'https://drive.google.com/file/d/17tLLCBQ41GuvVBB_l_NnlO16sXpKLuRy/preview',
    user_id: 1
  },
  {
    name: "React Portfolio",
    gitHub: "https://github.com/NguyenJohnnyT/portfolio-react",
    deploy: "#",
    description: "A React portfolio which features administrator login, a backend database filled with my completed projects or works in progress.  Will feature POST and PUT routes for new projects",
    user_id: 1
  },
  {
    name: "Code Quiz Challenge",
    gitHub: "https://github.com/NguyenJohnnyT/CodeQuizChallenge",
    deploy: "https://nguyenjohnnyt.github.io/CodeQuizChallenge/",
    description: "One of the first projects from UCBerkeley Boot Camp that I built from scratch.  A coding quiz that utilizes local storage to store high scores and scores how quickly players answer correctly.",
    user_id: 1
  }
];

const seedProject = () => Project.bulkCreate(projectData);

module.exports = seedProject

