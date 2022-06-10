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

module.exports = { addNewRecurring };
