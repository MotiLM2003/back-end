const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const addUser = async (req, res) => {
  const use = new User(req.body);
  try {
    const user = await use.save();
    console.log('saved user');
    res.status(201).send(user);
  } catch (err) {
    console.log('err', err);
    res.send(err);
  }
};

const initLogin = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    console.log('user:', user);

    const token = await user.generateAuthToken();
    res
      .status(202)
      .cookie('token', token, {
        sameSite: 'strict',
        path: '/',
        expires: new Date(new Date().getTime() + 1000 * 1000),
      })
      .send({ user, token });
  } catch (error) {
    res
      .status(400)
      .send({ message: 'could validata credentials admin', error });
  }
};
process.env.JWTSECRET;
const validateToken = async (req, res) => {
  try {
    const token = req.body.token;

    const decoded = jwt.verify(token, process.env.JWTSECRET);
    const user = await User.findOne({ id: decoded.id, 'tokens.token': token });
    res.send(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  addUser,
  initLogin,
  //   getAllUsers,
  //   logOut,
  //   logOutAll,
  validateToken,
  //   updateById,
  //   saveUser,
};
