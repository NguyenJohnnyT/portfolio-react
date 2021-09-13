const router = require('express').Router();
const { Project } = require('../../models');
//| .../api/projects/

router.get('/', async (req, res) => {
  try{
    const projectData = await Project.findAll();
    // console.log(ProjectData);
    const project = projectData.map(e => e.get({ plain: true }))
    // console.log(Project);
    res.status(200).json(project);

  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;