const router = require('express').Router();
const { Project, Skill, ProjectSkill } = require('../../models');
//| .../api/projects-skill-routes/

router.get('/', async (req, res) => {
  try{
    const psData = await Project.findAll({
      include:
      [
        { as: 'assigned_skills',
          model: Skill,
          through: {
            attributes: {exclude: ['project_id', 'skill_id']}
          }
        }
      ]
    });
    // console.log(ProjectData);
    const ps = psData.map(e => e.get({ plain: true }))
    // console.log(Project);
    res.status(200).json(ps);

  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;