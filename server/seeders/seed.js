const db = require('../config/connection');
const { User } = require('../models');
const { users } = require('./userSeeds');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(users);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});