const recurringSchema = new mongoose.Schema(
  {
    displayName: { type: String, default: "", required: true },
    sum: { type: double, default: 0, required: true },
    currency: { type: Number, default: 0, required: true },
    isRecurring: { type: Boolean, default: true },
    recurringTimeline: {
      type: Number,
      default: 0,
      required: true,
    },
    recurringCount: {
      type: Number,
      default: 0,
      required: true,
    },
    isAnonymous: {
      type: Boolean,
      default: false,
      required: true,
    },
    isAddPublicNote: {
      type: Boolean,
      default: false,
      required: true,
    },
    isCompleteFee: { type: Boolean, default: false, required: true },
    publicNote: {
      type: string,
      default: "",
      required: true,
    },
    owner: {
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
