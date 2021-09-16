const { Project } = require('../models')

const projectData = [
  {
    name: 'TAMAGACHA',
    description: "Current project. Collect all five Tamas -- they each have different stories! Feed, play, and take them out.  See what they're saying when they're hungry, sad, or happy.  Make sure to keep up and check on them to see their happiness level or else they will die.",
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
    pictures: "https://drive.google.com/file/d/1orvzhWcD-TrjgPf7REB13vy9sIoaQVOS/preview",
    user_id: 1
  },
  {
    name: "Tech Blog",
    gitHub: "https://github.com/NguyenJohnnyT/tech-blog-application",
    deploy: "https://dry-spire-24651.herokuapp.com/",
    description: "Interact with a tech blog, create an account safely with a username and salted and hashed password, view and comment on posts, or make your own blog post that other users can interact with!",
    pictures: "https://drive.google.com/file/d/1JHNc4UWlybL3IsgNz-Os4z1bXuVaptVr/preview",
    user_id: 1
  },
];

const seedProject = () => Project.bulkCreate(projectData);

module.exports = seedProject

