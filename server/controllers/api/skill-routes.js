const router = require('express').Router();
const { Skill } = require('../../models');
//| .../api/skills/

router.get('/', async (req, res) => {
  try{
    const skillData = await Skill.findAll();
    // console.log(skillData);
    const skill = skillData.map(e => e.get({ plain: true }))
    // console.log(skill);
    res.status(200).json(skill);

  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;