const express = require("express");
const auth = require("../middleware/auth");
const router = new express.Router();

const {
  addPayment,
  getPayments,
  //   UpdateCampingById,
  //   getCampingById,
} = require("../controllers/paymentsController");
router.post("/", addPayment);
router.post("/get", getPayments);
// router.put("/update", UpdateCampingById);
// router.post("/getOne", getCampingById);
// router.get('/', auth, getAllUsers);
// router.post('/logout', auth, logOut);
// router.post('/logoutAll', auth, logOutAll);
// router.post('/save-user/', auth, saveUser);
module.exports = router;
