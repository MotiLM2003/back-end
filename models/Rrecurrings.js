const mongoose = require("mongoose");

const recurringSchema = new mongoose.Schema(
  {
    isActive: {
      type: Boolean,
      default: true,
      required: true,
    },
    displayName: { type: String, default: "", required: true },
    currency: { type: Number, default: 0, required: true },
    sum: { type: Number, default: 0, required: true },
    isRecurring: { type: Boolean, default: true },
    recurringTimeline: {
      type: Number,
      default: 0,
      required: true,
    },
    recurringType: {
      type: Number,
      default: 0,
      required: true,
    },
    recurringCount: {
      type: Number,
      default: 0,
      required: true,
    },
    isRecurring: {
      type: String,
      default: "1",
      required: true,
    },
    isAnonymous: {
      type: Boolean,
      default: false,
    },
    isAddPublicNote: {
      type: Boolean,
      default: false,
    },
    isCompleteFee: { type: Boolean, default: false, required: true },
    publicNote: {
      type: String,
      default: "",
    },
    firstName: {
      type: String,
      default: "",
      required: true,
    },
    lastName: {
      type: String,
      default: "",
      required: true,
    },
    paymentType: {
      type: Number,
      default: 0,
      required: true,
    },
    cellphone: {
      type: String,
      default: "",
      required: true,
    },
    email: {
      type: String,
      default: "",
      required: true,
    },
    donationNote: {
      type: String,
      default: "",
    },
    paymentType: {
      type: Number,
      default: 0,
      required: true,
    },
    creditCardNumber: {
      type: String,
      default: "",
    },
    creditCardExpire: {
      type: String,
      default: "",
    },
    CVC: {
      type: String,
      default: "",
    },
    isMarketingEmail: {
      type: Boolean,
      default: false,
      required: true,
    },
    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaigns",
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Recurring = mongoose.model("Recurrings", recurringSchema);
module.exports = Recurring;
