const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const addUser = async (req, res) => {
  const use = new User(req.body);
  try {
    console.log('saving user');
    const user = await use.save();
    res.status(201).send(user);
  } catch (err) {
    console.log('err', err);
    res.send(err);
  }
};

module.exports = {
  addUser,
  //   initLogin,
  //   getAllUsers,
  //   logOut,
  //   logOutAll,
  //   validateToken,
  //   updateById,
  //   saveUser,
};
