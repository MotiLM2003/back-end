const express = require("express");
const auth = require("../middleware/auth");
const router = new express.Router();

const {
  addRecurring,
  getDonations,
  updateRecurringById,
  getRecurringTaskList
} = require("../controllers/recurringController");
router.post("/get/", getDonations);
router.post("/", addRecurring);
router.put("/update", updateRecurringById);
router.post('/get-recurring-task' , getRecurringTaskList)
// router.post("/getOne", getCampingById);
// router.get('/', auth, getAllUsers);
// router.post('/logout', auth, logOut);
// router.post('/logoutAll', auth, logOutAll);
// router.post('/save-user/', auth, saveUser);
module.exports = router;
