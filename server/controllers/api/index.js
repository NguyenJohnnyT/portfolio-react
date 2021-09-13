const router = require('express').Router();

const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const skillRoutes = require('./skill-routes');
const projectSkillRoutes = require('./projectSkill-routes')

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/skills', skillRoutes);
router.use('/project-skill-join', projectSkillRoutes)

module.exports = router