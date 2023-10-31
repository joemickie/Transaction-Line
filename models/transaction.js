const mongoose = require("mongoose");

const transactionsSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    received_from: {
      type: Number,
    },
    sent_to: {
      type: Number,
    },
    transaction_type: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "Please provide amount"],
    },
    transaction_status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Transaction", transactionsSchema);
