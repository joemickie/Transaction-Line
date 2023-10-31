const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    Admin_Name: {
      type: String,
      required: true,
      unique: true,
    },
    Admin_pin: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("bank_Admin", adminSchema);
