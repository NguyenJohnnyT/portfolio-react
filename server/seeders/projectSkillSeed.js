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
  },
  {
    project_id: 1,
    skill_id: 6
  },
  {
    project_id: 1,
    skill_id: 8
  },
  {
    project_id: 1,
    skill_id: 9
  },
  {
    project_id: 1,
    skill_id: 10
  },
  {
    project_id: 1,
    skill_id: 11
  },
  {
    project_id: 1,
    skill_id: 13
  },
  {
    project_id: 1,
    skill_id: 14
  },
  {
    project_id: 1,
    skill_id: 15
  },
  {
    project_id: 1,
    skill_id: 16
  },
  {
    project_id: 1,
    skill_id: 20
  },
  {
    project_id: 1,
    skill_id: 21
  },
  {
    project_id: 1,
    skill_id: 22
  },
  {
    project_id: 1,
    skill_id: 24
  },
  {
    project_id: 1,
    skill_id: 25
  },
  {
    project_id: 1,
    skill_id: 26
  },
  {
    project_id: 1,
    skill_id: 27
  },
  {
    project_id: 1,
    skill_id: 28
  },
  {
    project_id: 1,
    skill_id: 29
  },
  {
    project_id: 2,
    skill_id: 1
  },
];

const seedProjectSkill = () => ProjectSkill.bulkCreate(projectSkillData);

module.exports = seedProjectSkill