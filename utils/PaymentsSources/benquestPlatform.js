const { charge } = require("../../actions/banquestDBActions");

const handleAction = (recurring, options) => {
  const { sum, creditCardExpire, CVC, creditCardNumber } = recurring;
  const { action } = options;
  const cardDetails = {
    amount: sum,
    expiry_month: 0,
    expiry_year: 0,
    cvv2: CVC,
    card: creditCardNumber,
  };
  switch (action) {
    case "charge": {
      console.log("chargin credit card", cardDetails);
      return;
      const newCharger = charge(cardDetails);
    }
  }
};

module.exports = { handleAction };
