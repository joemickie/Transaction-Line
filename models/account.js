const mongoose = require("mongoose");

const accountSchema = mongoose.Schema(
  {
    account_owner: {
      type: String,
      required: true,
    },
    account_number: {
      type: Number,
      required: true,
      unique: true,
    },
    account_pin: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    account_email: {
      type: String,
      required: true,
      unique: true,
    },
    account_balance: {
      type: Number,
      required: true,
    },
    account_phone_number: {
      type: String,
      required: true,
    },
    is_activated: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Bank_Account", accountSchema);
