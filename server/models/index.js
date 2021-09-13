const User = require('./User');
const Project = require('./Project');
const Skill = require ('./Skill');
const ProjectSkill = require ('./ProjectSkill');

User.hasMany(Project, {
  foreignKey: "user_id"
});

Project.belongsTo(User,
  {
    foreignKey: "user_id"
});

Project.belongsToMany(Skill, {
  as: "projectHasMany",
  through: ProjectSkill,
  unique: false,
  foreignKey: "project_id"
})

Skill.belongsToMany(Project, {
  as: "skillBelongsMany",
  through: ProjectSkill,
  unique: false,
  foreignKey: "skill_id"
})

module.exports = { User, Project, Skill, ProjectSkill };