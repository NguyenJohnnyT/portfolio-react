const { Skill } = require('../models');

const skillData = [
  {
    name: "JavaScript"
  },
  {
    name: "HTML"
  },
  {
    name: "CSS"
  }
];

const seedSkill = () => Skill.bulkCreate(skillData);

module.exports = seedSkill;