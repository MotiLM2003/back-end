const api = require("../apis/banquestAPI/banquestAPI");
const charge = async (cardDetails = {}) => {
  // 41111111111111111
  //  12
  // 2022

  const card = {
    amount: 0,
    expiry_month: 0,
    expiry_year: 0,
    cvv2: "123",
    card: "41111111111111111",
    capture: true,
    save_card: false,
  };
  try {
    const newCard = { ...card, ...cardDetails };
    const json = JSON.stringify(newCard);
    const results = await api.post("/charge/", json);
    console.log("results", results);
    return results;
  } catch (err) {
    return er;
  }
};

module.exports = { charge };