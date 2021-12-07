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

//update project data
router.put('/:id', async (req, res) => {
  try {
    const response = await Project.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (response) {
      res.status(200).json({response, message: "Project edited!"})
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;