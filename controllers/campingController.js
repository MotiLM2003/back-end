const {
  getAll,
  addNewCamping,
  updateById,
  DBgetCampingById,
} = require('../actions/campingDBActuib');
const addCamping = async (req, res) => {
  try {
    const newCamping = await addNewCamping(req.body);
    res.status(201).send(newCamping);
  } catch (err) {
    console.log('err', err);
    res.send(err);
  }
};

const getCampingById = async (req, res) => {
  const customer = await DBgetCampingById(req.body);

  res.send(customer);
};
const UpdateCampingById = async (req, res) => {
  try {
    const response = await updateById(req.body);
    res.status(201).send(response);
  } catch (err) {
    console.log('err', err);
    res.send(err);
  }
};

const getCamping = async (req, res) => {
  const lst = await getAll(req, res);
  res.send(lst);
};

module.exports = {
  addCamping,
  getCamping,
  UpdateCampingById,
  getCampingById,
};
