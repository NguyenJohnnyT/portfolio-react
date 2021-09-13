const { ProjectSkill } = require('../models');

const projectSkillData = [
  {
    project_id: 1,
    skill_id: 1
  },
  {
    project_id: 1,
    skill_id: 2
  },
  {
    project_id: 1,
    skill_id: 3
  }
];

const seedProjectSkill = () => ProjectSkill.bulkCreate(projectSkillData);

module.exports = seedProjectSkill