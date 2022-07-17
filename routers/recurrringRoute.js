const express = require("express");
const auth = require("../middleware/auth");
const router = new express.Router();

const {
  addRecurring,
  getDonations,
  updateRecurringById,
  getRecurringTaskList,
  getRecurringById
} = require("../controllers/recurringController");
router.post("/get/", getDonations);
router.post("/getById/", getRecurringById);
router.post("/", addRecurring);
router.put("/update", updateRecurringById);
router.post('/get-recurring-task' , getRecurringTaskList)

// router.get('/', auth, getAllUsers);
// router.post('/logout', auth, logOut);
// router.post('/logoutAll', auth, logOutAll);
// router.post('/save-user/', auth, saveUser);
module.exports = router;
