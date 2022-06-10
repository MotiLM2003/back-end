const Recurring = require("../models/Rrecurrings");
const addNewRecurring = async (data) => {
  const recurring = new Recurring(data);
  try {
    const newRecurring = await recurring.save();
    return newRecurring;
  } catch (err) {
    console.log("err", err);
  }
};

const getAll = async (filters = {}) => {
  console.log(filters);
  const donations = await Recurring.find(filters);
  console.log(donations);
  return donations;
};

module.exports = { addNewRecurring, getAll };
