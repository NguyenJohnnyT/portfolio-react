const { Skill } = require('../models');

const skillData = [
  //|1
  {
    name: "JavaScript"
  },
  {
    name: "HTML5"
  },
  {
    name: "CSS"
  },
  {
    name: "Web API"
  },
  {
    name: "jQuery"
  },
  {
    name: "Server Side API"
  },
  {
    name: "Insomnia"
  },
  {
    name: "Fetch"
  },
  {
    name: "JSON"
  },
  //|10
  {
    name: "Node.js"
  },
  {
    name: "Express.js"
  },
  {
    name: "Handlebars.js"
  },
  {
    name: "Heroku"
  },
  {
    name: "JSON Web Tokens"
  },
  {
    name: "MySQL"
  },
  {
    name: "Sequelize ORM"
  },
  {
    name: "MongoDB"
  },
  {
    name: "Mongoose ODM"
  },
  {
    name: "Object-Oriented Programming"
  },
  //|20
  {
    name: "React"
  },
  {
    name: "React Hooks"
  },
  {
    name: "JSX"
  },
  {
    name: "GraphQL"
  },
  {
    name: "bcrypt"
  },
  {
    name: "dotenv"
  },
  {
    name: "node-cron"
  },
  {
    name: "node-fetch"
  },
  {
    name: "sweetalert2"
  },
  {
    name: "howler"
  },
  //|30
  {
    name: "Local Storage"
  },
  {
    name: "Express-sessions"
  },
];

const seedSkill = () => Skill.bulkCreate(skillData);

module.exports = seedSkill;