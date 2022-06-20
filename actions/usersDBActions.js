const User = require("../models/User");
const getAll = async (filters = {}) => {
  const users = await User.find(filters);

  return users;
};

const login = async (data) => {
  try {
    const user = await User.findByCredentials(data.email, data.password);
    const token = await user.generateAuthToken();
    return { user, token };
  } catch {}
};
const addNewUser = async (data) => {
  const use = new User(data);
  try {
    const user = await use.save();

    return user;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

const DBgetUserById = async (_id) => {
  try {
    const user = await User.findOne({
      _id,
    });
    return customer;
  } catch (err) {
    return { error: err };
  }
};

const updateById = async (filters = {}) => {
  try {
    const { _id } = filters;

    delete filters._id;
    const user = await User.updateOne({ _id }, filters);
    return user;
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = { login, getAll, addNewUser, updateById, DBgetUserById };
