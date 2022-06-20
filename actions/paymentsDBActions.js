const Payments = require("../models/Payments");

const getAll = async (filters = {}) => {
  try {
    const payments = await Payments.find(filters)
      .populate("campaign", {
        _id: 1,
        campaignName: 1,
      })
      .populate("recurring", {
        _id: 1,
        recurringCount: 1,
        currentRecurringCount: 1,
      });
    return payments;
  } catch (err) {
    console.log(err);
  }
};

const addNewPayments = async (data) => {
  console.log(data);
  const pa = new Payments(data);
  try {
    const payment = await pa.save();
    return payment;
  } catch (err) {
    console.log("err", err);
  }
};

// const DBgetCampingById = async (_id) => {
//   try {
//     const customer = await Camping.findOne({
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
//     delete filters._id;
//     const camping = await Camping.updateOne({ _id }, filters);

//     return camping;
//   } catch (err) {
//     console.log("err", err);
//   }
// };

module.exports = { addNewPayments, getAll };
