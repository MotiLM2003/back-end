const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, default: '', trim: true },
    lastName: { type: String, default: '', trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    // userName: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    status: { type: Number, default: 0 },
    birthDate: { type: Date },
    idNumber: { type: Number, default: 0 },
    country: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    street: { type: String, required: true, trim: true },
    zipCode: { type: String, required: true, trim: true },
    moreDetails: { type: String, required: true, trim: true },
    certificateNumber: { type: Number, default: 0 },
    creditCardNumber: { type: Number, default: 0 },
    creditCardExpire: { type: Date, default: 0 },
    CVC: { type: Number, default: 0 },

    role: { type: { type: String, default: 'user', trim: true } },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.tokens;
  delete userObject.__v;
  delete userObject.password;

  return userObject;
};

const User = mongoose.model('Users', userSchema);
module.exports = User;
