const {
  login,
  getAll,
  addNewUser,
  updateById,
  DBgetUserById,
} = require('../actions/usersDBActions');

const addUser = async (req, res) => {
  const user = await addNewUser(req.body);

  res.status(201).send(user);
  console.log(user);
};

const getUsers = async (req, res) => {
  try {
    const users = await getAll(req.body);
    res.send(users);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};
const initLogin = async (req, res) => {
  try {
    const data = await login(req.body);
    const { token, user } = data;

    res
      .status(202)
      .cookie('token', token, {
        sameSite: 'strict',
        path: '/',
        expires: new Date(new Date().getTime() + 1000 * 1000),
      })
      .send(data);
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

const updateUserById = async (req, res) => {
  const user = updateById(req.body);

  res.status(201).send(user);
};

module.exports = {
  addUser,
  initLogin,
  getUsers,
  //   logOut,
  //   logOutAll,
  validateToken,
  updateUserById,
  //   updateById,
  //   saveUser,
};
