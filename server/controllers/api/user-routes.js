const router = require('express').Router();
const { User } = require('../../models');
//| .../api/users/

router.get('/', async (req, res) => {
  try{
    const userData = await User.findAll();
    // console.log(userData);
    const user = userData.map(e => e.get({ plain: true }))
    // console.log(user);
    res.status(200).json(user);

  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;