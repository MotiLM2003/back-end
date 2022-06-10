const { addNewRecurring, getAll } = require("../actions/recurringDBActions");

const Rrecurrings = require("../models/Rrecurrings");
// const getAll = async (filters = {}) => {
//   console.log(' here');
//   console.log(filters);
//   const users = await User.find(filters);
//   console.log(users);
//   return users;
// };

const addRecurring = async (req, res) => {
  try {
    const { recurring, privateRecurring } = req.body;
    console.log(req.body);
    const newRecurring = await addNewRecurring(recurring);
    const newPrivateRecurring = null;
    if (privateRecurring.sum > 0) {
      privateRecurring.displayName = recurring.displayName;

      await addNewRecurring(privateRecurring);
    }

    res.status(201).send(newRecurring);
  } catch (err) {
    console.log("err", err);
    res.send(err);
  }
};

const getDonations = async (req, res) => {
  try {
    const donations = await getAll(req.body);
    res.send(donations);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};
// const DBgetUserById = async (_id) => {
//   try {
//     const user = await User.findOne({
//       _id,
//     });
//     return customer;
//   } catch (err) {
//     return { error: err };
//   }
// };

// const updateById = async (filters = {}) => {
//   try {
//     const { _id } = filters;
//     console.log(_id, filters);
//     delete filters._id;
//     const user = await User.updateOne({ _id }, filters);
//     return user;
//   } catch (err) {
//     console.log("err", err);
//   }
// };

module.exports = { addRecurring, getDonations };
// module.exports = { login, getAll, addNewUser, updateById, DBgetUserById };
