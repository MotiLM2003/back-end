const {
  getAll,
  addNewPayments,
  updateById,
  DBgetCampingById,
} = require("../actions/paymentsDBActions");
const addPayment = async (req, res) => {
  try {
    const newPayment = await addNewPayments(req.body);
    res.status(201).send(newPayment);
  } catch (err) {
    console.log("err", err);
    res.send(err);
  }
};

// const getCampingById = async (req, res) => {
//   const customer = await DBgetCampingById(req.body);

//   res.send(customer);
// };
// const UpdateCampingById = async (req, res) => {
//   try {
//     const response = await updateById(req.body);
//     res.status(201).send(response);
//   } catch (err) {
//     console.log("err", err);
//     res.send(err);
//   }
// };

const getPayments = async (req, res) => {
  try {
    console.log(req.body);

    const lst = await getAll(req.body);

    res.send(lst);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  addPayment,
  getPayments,
  //   UpdateCampingById,
  //   getCampingById,
};
