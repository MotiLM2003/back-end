const { addNewRecurring } = require("../actions/recurringDBActions");

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
    const newRecurring = await addNewRecurring(req.body);
    res.status(201).send(newRecurring);
  } catch (err) {
    console.log("err", err);
    res.send(err);
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

module.exports = { addRecurring };
// module.exports = { login, getAll, addNewUser, updateById, DBgetUserById };
