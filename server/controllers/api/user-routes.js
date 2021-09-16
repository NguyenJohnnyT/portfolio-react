const router = require('express').Router();
const { User } = require('../../models');
const { signToken } = require('../../utils/auth')
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
});

//LOGIN
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (!userData) {
      res.status(400).json({ message: "Incorrect email/password.  Please try again!" });
      return;
    };

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email/password.  Please try again!" });
      return;
    };

    const token = signToken(userData);
    res.status(200).json({
      token,
      userData,
      message: "You are logged in!"
     });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;