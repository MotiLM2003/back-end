const {
  addNewRecurring,
  getAll,
  updateById,
  DBGetRecurringById,
  DBGetRecurringTaskList
} = require("../actions/recurringDBActions");

const { addNewPayments } = require("../actions/paymentsDBActions");
const { getNewPayment } = require("../utils/payments");
const { apiSelector } = require("../apis/apiSelector");
const Rrecurrings = require("../models/Rrecurrings");
// const getAll = async (filters = {}) => {
//   console.log(' here');
//   console.log(filters);
//   const users = await User.find(filters);
//   console.log(users);
//   return users;
// };

const getRecurringById = async (req, res) => {
  const recurring = await DBGetRecurringById(req.body);
  res.send(recurring);
};

const getRecurringTaskList = async (req, res) => {
  const recurring = await DBGetRecurringTaskList(req.body);
  res.send(recurring.filter(x=> x.paymentInterface !== null));
}

const addRecurring = async (req, res) => {
  try {
    const { recurring, privateRecurring } = req.body;
    if (recurring.isImmediatePayment) {
      // increasing recurring count
      recurring.currentRecurringCount = 1;
      recurring.isByEngine = false;
    }
     const newRecurring = await addNewRecurring(recurring);
    // checking for API 

    console.log("Calling API  Selector".green);
    const results = await apiSelector(newRecurring._id);
    console.log('returnning', results);
  
     if(results.isApproved) {
      newRecurring.reference_id = results.data.reference_number;
     } else {
       console.log('failed')
     }


    addImmediatePayment(newRecurring);
    const newPrivateRecurring = null;
    if (privateRecurring.sum > 0) {
      privateRecurring.displayName = recurring.displayName;

      if (newPrivateRecurring?.isImmediatePayment) {
        privateRecurring.currentRecurringCount = 1;
        recurring.isByEngine = false;
      }


      const newPrivateRecurringResult = await addNewRecurring(privateRecurring);
      // addImmediatePayment(newPrivateRecurringResult);
    }

    

    res.status(201).send(newRecurring);
  } catch (err) {
    console.log("err", err);
    res.send(err);
  }
};

// adding new payment if
 const addImmediatePayment = (recurring) => {
  
  if (!recurring?.isImmediatePayment) return;
  let payment = getNewPayment(recurring);
  // console.log("new payment", payment);
 
  addNewPayments(payment);
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

const updateRecurringById = async (req, res) => {
  const recurring = updateById(req.body);
  res.status(201).send(recurring);
};

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

module.exports = {
  addRecurring,
  getDonations,
  updateRecurringById,
  getRecurringById,
  getRecurringTaskList,
  addImmediatePayment,
  getRecurringById
};
// module.exports = { login, getAll, addNewUser, updateById, DBgetUserById };
