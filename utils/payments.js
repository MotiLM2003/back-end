const uuid = require("uuid");

const getNewPayment = (r) => {
  console.log("in payments", r);
  //   creating new payment object.
  const payment = {
    isPrivateDonation: r.isPrivateDonation,
    currency: r.currency,
    sum: r.sum,
    fee: r.fee,
    isRecurring: r.isRecurring,
    recurringCount: r.currentRecurringCount,
    isAnonymous: r.isAnonymous,
    isCompleteFee: r.isCompleteFee,
    paymentType: r.paymentType,
    campaign: r.campaign,
    recurring: r._id,
    reference_id: uuid.v4(),
  };

  return payment;
};

module.exports = { getNewPayment };
